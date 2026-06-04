import React from "react";

const PageHeader = ({ title, content }) => {
  return (
    <div className="relative w-full overflow-hidden h-84">
      {/* Background layers */}
      <div className="absolute inset-0 bg-[var(--color-background)]" />

      {/* Radial glow - top center burst */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,_var(--color-pink)_0%,_transparent_60%)] opacity-30" />

      {/* Secondary glow - offset for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-pink)_0%,_transparent_50%)] opacity-10" />

      {/* Subtle noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMSIvPjwvc3ZnPg==')]" />

      {/* Bottom fade to page background */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--color-background)] to-transparent" />

      {/* Content */}
      <div className="relative flex justify-center h-full p-6">
        <div className="flex flex-col max-w-3xl m-auto space-y-4">
          <h1
            className="text-5xl font-bold text-[var(--color-text)] drop-shadow-[0_0_25px_rgba(214,77,133,0.4)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {title}
          </h1>
          <p className="text-lg font-medium text-[var(--color-text)]/80 max-w-2xl">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
