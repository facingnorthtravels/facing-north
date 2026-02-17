import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const FloatingWhatsAppBtn = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="+447435782146"
      accountName="Facing North"
      avatar={"/assets/navbar-assets/logo-white.png"}
      // avatar={"/assets/profile-user.png"}
      chatMessage="Your adventure is a message away."
    />
  );
};

export default FloatingWhatsAppBtn;
