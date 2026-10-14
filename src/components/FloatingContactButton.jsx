
import React from "react";
import { Contact, Download } from "lucide-react";

const FloatingContactButton = () => {
  const saveContact = () => {
    const contact = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  "FN:Ron Mamucod",
  "N:Mamucod;Ron;;;",
  "TITLE:Web Developer & WordPress Specialist",
  "TEL;TYPE=CELL:+639617867924",
  "EMAIL;TYPE=INTERNET:mamucodron@gmail.com",
  "URL:https://github.com/RonMamucod",
  "URL:https://www.linkedin.com/in/ron-mamucod-150588282/",
  "END:VCARD",
].join("\r\n");

    const blob = new Blob([contact], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "Ron-Mamucod.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      type="button"
      onClick={saveContact}
      aria-label="Save Ron Mamucod's contact"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-3 rounded-full border border-primary/40 bg-background/90 px-5 py-3 text-foreground shadow-lg shadow-primary/10 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-primary/30"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-background transition-transform duration-300 group-hover:rotate-6">
        <Contact className="h-5 w-5" />
      </span>

      <span className="flex flex-col items-start">
        <span className="text-sm font-semibold">
          Save My Contact
        </span>
        <span className="text-xs text-muted-foreground">
          Add me to your contacts
        </span>
      </span>

      <Download className="ml-1 h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-y-0.5" />
    </button>
  );
};

export default FloatingContactButton;
