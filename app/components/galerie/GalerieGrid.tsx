import fs from "fs";
import path from "path";
import GalerieFilter from "./GalerieFilter";

function getBilder() {
  const basisPfad = path.join(process.cwd(), "public/galerie");
  const kategorien = fs.readdirSync(basisPfad);

  const alleProjekte = kategorien.flatMap((kategorie) => {
    const kategoriePfad = path.join(basisPfad, kategorie);
    const dateien = fs.readdirSync(kategoriePfad);

    return dateien.map((datei) => ({
      titel: datei.replace(".jpeg", "").replace("-", " #"),
      kategorie: kategorie,
      bildPfad: `/galerie/${kategorie}/${datei}`,
    }));
  });

  return { projekte: alleProjekte, kategorien };
}

export default function GalerieGrid() {
  const { projekte, kategorien } = getBilder();

  return (
    <div className="max-w-6xl mx-auto px-8 py-24">
      <GalerieFilter projekte={projekte} kategorien={kategorien} />
    </div>
  );
}