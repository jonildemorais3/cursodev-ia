import ConfettiExplosion from "./confetti";

export const dynamic = "force-dynamic";

async function getTotalContents() {
  try {
    const response = await fetch(
      "https://www.tabnews.com.br/api/v1/contents?strategy=new&per_page=1",
      { cache: "no-store" }
    );

    if (!response.ok) return null;

    const total = Number(response.headers.get("x-pagination-total-rows"));
    return Number.isFinite(total) ? total : null;
  } catch {
    return null;
  }
}

export default async function Home() {
  const total = await getTotalContents();

  return (
    <main>
      <ConfettiExplosion />

      <h1>🚧 Em Construção</h1>

      <p>
        Estamos neste exato momento reconstruindo o TabNews, um lugar na
        internet para quem trabalha com tecnologia e precisa consumir
        conteúdos com valor concreto.
      </p>

      <p className="total">
        {total === null ? (
          "Total de conteúdos publicados: indisponível no momento"
        ) : (
          <>
            Total de conteúdos publicados no TabNews:{" "}
            <strong>{new Intl.NumberFormat("pt-BR").format(total)}</strong>
          </>
        )}
      </p>

      <a href="https://www.tabnews.com.br" target="_blank" rel="noreferrer">
        Acesse o site oficial: tabnews.com.br
      </a>
    </main>
  );
}
