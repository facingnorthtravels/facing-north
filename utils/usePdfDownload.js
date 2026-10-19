import { useCallback, useRef, useState } from "react";

// Downloads an itinerary PDF with visible feedback: progress while it streams,
// a short "Downloaded" confirmation, and a new-tab fallback if anything fails.
// Used by the Download buttons on the tour detail page.
export default function usePdfDownload(pdfUrl) {
  const [status, setStatus] = useState("idle"); // idle | downloading | done
  const [progress, setProgress] = useState(null); // 0-100, null when size unknown
  const busy = useRef(false);

  const download = useCallback(async () => {
    if (!pdfUrl || busy.current) return;
    busy.current = true;
    setStatus("downloading");
    setProgress(null);

    // pdfUrl is root-relative (e.g. /assets/PDFS/foo.pdf) — resolve against this origin
    const url = pdfUrl.startsWith("http")
      ? pdfUrl
      : `${window.location.origin}${pdfUrl.startsWith("/") ? "" : "/"}${pdfUrl}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const total = Number(response.headers.get("content-length")) || 0;
      let blob;
      if (response.body && total) {
        const reader = response.body.getReader();
        const chunks = [];
        let received = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value);
          received += value.length;
          setProgress(Math.min(99, Math.round((received / total) * 100)));
        }
        blob = new Blob(chunks, { type: "application/pdf" });
      } else {
        blob = await response.blob();
      }

      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = pdfUrl.split("/").pop() || "trip.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);

      setProgress(100);
      setStatus("done");
      setTimeout(() => setStatus("idle"), 2500);
    } catch (error) {
      console.error("Download failed:", error);
      window.open(url, "_blank");
      setStatus("idle");
    } finally {
      busy.current = false;
    }
  }, [pdfUrl]);

  const label =
    status === "downloading"
      ? progress != null
        ? `Downloading ${progress}%`
        : "Preparing…"
      : status === "done"
        ? "Downloaded ✓"
        : null;

  return { download, status, progress, label, isDownloading: status === "downloading" };
}
