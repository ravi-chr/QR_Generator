import React, { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { toPng, toSvg } from "html-to-image";
import { jsPDF } from "jspdf";
import { Download, Share2, MapIcon as WhatsappIcon, Mail } from "lucide-react";
import { WhatsappShareButton, EmailShareButton } from "react-share";
import { ColorPicker } from "./components/ColorPicker";
import { LanguageToggle } from "./components/LanguageToggle";
import "./i18n";

function App() {
  const { t } = useTranslation();
  const [text, setText] = useState("");
  const [size, setSize] = useState(256);
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownload = async (format: "png" | "svg" | "pdf") => {
    if (!qrRef.current) return;

    try {
      switch (format) {
        case "png":
          const pngData = await toPng(qrRef.current);
          const pngLink = document.createElement("a");
          pngLink.download = "qrcode.png";
          pngLink.href = pngData;
          pngLink.click();
          break;

        case "svg":
          const svgData = await toSvg(qrRef.current);
          const svgLink = document.createElement("a");
          svgLink.download = "qrcode.svg";
          svgLink.href = svgData;
          svgLink.click();
          break;

        case "pdf":
          const pdfData = await toPng(qrRef.current);
          const pdf = new jsPDF();
          const imgProps = pdf.getImageProperties(pdfData);
          const pdfWidth = pdf.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
          pdf.addImage(pdfData, "PNG", 0, 0, pdfWidth, pdfHeight);
          pdf.save("qrcode.pdf");
          break;
      }
    } catch (error) {
      console.error("Error downloading QR code:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8"
      >
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t("title")}</h1>
          <LanguageToggle />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={t("inputPlaceholder")}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t("size")} ({t("pixels")})
              </label>
              <input
                type="range"
                min="128"
                max="512"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-sm text-gray-500">{size}px</span>
            </div>

            <ColorPicker
              color={fgColor}
              onChange={setFgColor}
              label={t("foregroundColor")}
            />

            <ColorPicker
              color={bgColor}
              onChange={setBgColor}
              label={t("backgroundColor")}
            />
          </div>

          <div className="flex flex-col items-center space-y-6">
            <motion.div
              ref={qrRef}
              className="p-4 bg-white rounded-lg shadow-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring" }}
            >
              <QRCodeCanvas
                value={text || "Welcome To My QR-Code Generator"}
                size={size}
                fgColor={fgColor}
                bgColor={bgColor}
                level="H"
                includeMargin
              />
            </motion.div>

            <div className="flex flex-col w-full space-y-4">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => handleDownload("png")}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Download size={16} />
                  PNG
                </button>
                <button
                  onClick={() => handleDownload("svg")}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <Download size={16} />
                  SVG
                </button>
                <button
                  onClick={() => handleDownload("pdf")}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  <Download size={16} />
                  PDF
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                <WhatsappShareButton
                  url={text || "https://stackblitz.com"}
                  className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                >
                  <WhatsappIcon size={16} />
                  WhatsApp
                </WhatsappShareButton>

                <EmailShareButton
                  url={text || "https://stackblitz.com"}
                  subject="QR Code"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <Mail size={16} />
                  Email
                </EmailShareButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;
