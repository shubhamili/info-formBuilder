import { create } from "zustand";
import type { Form } from "../types/forms.types";




interface formStore {
    forms: Form[];
    setForms: (forms: Form[]) => void;
}


export const useFormStore = create<formStore>((set) => ({
    forms: [],
    setForms: (forms) => set({ forms }),
}))