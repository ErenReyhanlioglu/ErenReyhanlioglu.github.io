import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Site kullanıcı sayfası olarak (erenreyhanlioglu.github.io) kökten yayınlanıyor,
// bu yüzden `base` ayarı gerekmiyor.
export default defineConfig({
  plugins: [react()],
});
