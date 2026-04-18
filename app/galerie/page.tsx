import GalerieHeader from "../components/galerie/GalerieHeader";
import GalerieGrid from "../components/galerie/GalerieGrid";

export default function Galerie() {
  return (
    <main className="bg-stone-50 min-h-screen">
      <GalerieHeader />
      <GalerieGrid />
    </main>
  );
}