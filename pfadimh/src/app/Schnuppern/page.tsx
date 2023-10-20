"use client";
import React from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";

const genders = [
  { value: "Männlich", label: "Männlich" },
  { value: "Weiblich", label: "Weiblich" },
  { value: "Divers", label: "Divers" },
  { value: "keine Angabe", label: "keine Angabe" },
];

export default function schnuppern() {
  return (
    <div className="p-10 flex justify-center">
      <div className="flex w-full flex-wrap md:w-[768px] justify-center gap-4">
        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Vorname"
          placeholder="Max"
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Nachname"
          placeholder="Müller"
          className="w-full sm:max-w-xs"
        />

        <Select
          variant="underlined"
          label="Dein geschlecht:"
          placeholder=""
          className="w-full sm:max-w-xs"
        >
          {genders.map((gender) => (
            <SelectItem key={gender.value} value={gender.value}>
              {gender.label}
            </SelectItem>
          ))}
        </Select>

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Email"
          placeholder="max.müller@gmail.com"
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Telefon"
          placeholder="076 000 00 00"
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Strasse"
          placeholder="Maxmüller str."
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Nr"
          placeholder="182"
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Postleitzahl"
          placeholder="8089"
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Stadt/Dorf"
          placeholder="Meilen"
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="date"
          label="Geburtstag"
          placeholder="d/m/j"
          defaultValue="27.09.2006"
          className="w-full sm:max-w-xs"
        />

        <Input
          size="md"
          variant="underlined"
          type="text"
          label="Schulklasse"
          defaultValue=""
          className="w-full sm:max-w-xs"
        />
      </div>
    </div>
  );
}
