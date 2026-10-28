"use client";

import { useEffect, useState } from "react";

// Pantalla de carga con el logo de Blinders. Se muestra solo en la carga inicial
// (el layout persiste entre navegaciones) y se oculta cuando la página terminó de cargar.
const MIN_MS = 800;
const MAX_MS = 4000;

const Loader = () => {
    const [state, setState] = useState("visible"); // visible -> hiding -> hidden

    useEffect(() => {
        const start = performance.now();
        let hideTimer;

        const hide = () => {
            const wait = Math.max(0, MIN_MS - (performance.now() - start));
            hideTimer = setTimeout(() => setState("hiding"), wait);
        };

        if (document.readyState === "complete") hide();
        else window.addEventListener("load", hide, { once: true });

        // Si algún recurso tarda demasiado (videos), no bloqueamos la página
        const fallback = setTimeout(() => setState("hiding"), MAX_MS);

        return () => {
            window.removeEventListener("load", hide);
            clearTimeout(hideTimer);
            clearTimeout(fallback);
        };
    }, []);

    useEffect(() => {
        if (state !== "hiding") return;
        const t = setTimeout(() => setState("hidden"), 600);
        return () => clearTimeout(t);
    }, [state]);

    if (state === "hidden") return null;

    return (
        <div
            id="blinders-loader"
            role="status"
            aria-label="Cargando"
            className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-6 bg-[#0a0a0a] transition-opacity duration-500 ${state === "hiding" ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
            <svg
                width="58"
                height="45"
                viewBox="0 0 58 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="loader-logo w-[72px] h-auto md:w-[96px]"
                aria-hidden="true"
            >
                <path
                    d="M25.7842 44.6689H0.210938V0.369141H25.7842V44.6689ZM45.126 0.369141C52.1203 0.369402 57.79 6.03985 57.79 13.0342C57.79 16.8107 56.1346 20.1982 53.5127 22.5186C56.1351 24.8389 57.79 28.228 57.79 32.0049C57.7899 38.9991 52.1202 44.6687 45.126 44.6689H30.6924V0.369141H45.126Z"
                    fill="white"
                />
            </svg>
            <div className="loader-bar relative h-px w-[120px] overflow-hidden bg-[#262626]" />
        </div>
    );
};

export default Loader;
