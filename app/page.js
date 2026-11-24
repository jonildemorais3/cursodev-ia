import { Suspense } from "react";
import ConfettiExplosion from "./confetti";

export const dynamic = "force-dynamic";

const numberFormatter = new Intl.NumberFormat("pt-BR");

async function getTotalContents() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1",
      { cache: "no-store" },
    );

    if (!response.ok) return null;

    const total = Number(response.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

async function TotalContents() {
  const total = await getTotalContents();

  return (
    <p className="total">
      {total === null ? (
        "Total de conteúdos publicados: indisponível no momento"
      ) : (
        <>
          Total de conteúdos publicados no TabNews:{" "}
          <strong>{numberFormatter.format(total)}</strong>
        </>
      )}
    </p>
  );
}

export default function Home() {
  return (
    <main>
      <ConfettiExplosion />

      <h1>🚧 Em Construção</h1>

      <p>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir conteúdos
        com valor concreto.
      </p>

      <Suspense
        fallback={
          <p className="total">Total de conteúdos publicados: carregando…</p>
        }
      >
        <TotalContents />
      </Suspense>

      <a href="https://www.tabnews.com.br" target="_blank" rel="noreferrer">
        Acesse o site oficial: tabnews.com.br
      </a>
    </main>
  );
}
