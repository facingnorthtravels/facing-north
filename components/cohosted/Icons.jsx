import React from "react";

export const StarIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);

export const PaletteIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9 0 1.65.45 3.2 1.24 4.54.85 1.44 2.07 2.58 3.51 3.28.67.33 1.45.42 2.26.27.81-.15 1.55-.59 2.11-1.26l.02-.03c.39-.47.63-1.07.63-1.73 0-.55-.2-1.08-.55-1.49-.35-.41-.85-.66-1.39-.66h-1.5c-1.1 0-2-.9-2-2 0-4.41 3.59-8 8-8 .55 0 1 .45 1 1s-.45 1-1 1c-3.31 0-6 2.69-6 6 0 .55.45 1 1 1h1.5c1.01 0 1.94.51 2.5 1.36.56.85.61 1.91.14 2.8-.47.89-1.33 1.51-2.34 1.68-.34.06-.67.05-1-.02-1.73-.34-3.27-1.3-4.42-2.75C4.85 15.5 4 13.82 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 .55.45 1 1 1s1-.45 1-1c0-5.52-4.48-10-10-10z"/>
  </svg>
);

export const VerifiedIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    <path d="M10 17l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" fill="white"/>
  </svg>
);

export const GroupsIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A2.996 2.996 0 0 0 17.09 7c-.77 0-1.47.3-2 .78-.53-.48-1.23-.78-2-.78a2.996 2.996 0 0 0-2.87 2.37L7.68 16H10v6h4v-2.5h6V22zm-6.5-16.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S15.33 7 14.5 7s-1.5-.67-1.5-1.5zM24 16h-2.5l2.54-7.63A2.996 2.996 0 0 0 21.17 7c-.77 0-1.47.3-2 .78V6c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v1.78c-.53-.48-1.23-.78-2-.78a2.996 2.996 0 0 0-2.87 2.37L2.76 16H0v6h4v-2.5h16V22h4v-6z"/>
  </svg>
);

export const CameraIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 10.5l4.77-8.26A7.23 7.23 0 0 0 12 2c-2.13 0-4.07.92-5.42 2.49l2.82 6.01zm8.07-.89l-4.77 8.26c1.25.38 2.58.38 3.83 0l.94-8.26zm-8.95 0l-.94 8.26c1.25.38 2.58.38 3.83 0l-2.89-8.26zm8.95-2.36c.29-.29.29-.76 0-1.06l-1.41-1.41c-.29-.29-.76-.29-1.06 0L12 8.73l-3-.05 1.41-1.41c.29-.29.29-.76 0-1.06L9 4.79c-.29-.29-.76-.29-1.06 0l-1.41 1.41c-.29.29-.29.76 0 1.06L8.95 9.68l2.89 8.26L12 12l3.18 5.94 2.89-8.26 1.42-2.44z"/>
  </svg>
);

export const SecurityIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
  </svg>
);

export const ExploreIcon = ({ className = "" }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
);
