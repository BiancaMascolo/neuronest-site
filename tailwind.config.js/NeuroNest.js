import React from "react";

export default function NeuroNest() {
  return (
    <div className="bg-black text-purple-100 min-h-screen">
      <header className="bg-zinc-900 text-center border-b-4 border-yellow-400 p-8">
        <h1 className="text-4xl font-bold">NeuroNest</h1>
        <p className="text-xl">Psicologia Integral em Toronto</p>
      </header>

      <section className="p-6 border-b border-zinc-700">
        <h2 className="text-yellow-400 text-2xl mb-4">🌱 Sobre a NeuroNest</h2>
        <p>
          Na NeuroNest, acreditamos que a saúde mental precisa ser acessível, personalizada e profundamente humana.
          Inspirados pela Psicologia Integral de Ken Wilber, olhamos para o ser humano de forma completa:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li><strong>Biológica</strong> (corpo e cérebro)</li>
          <li><strong>Interpessoal</strong> (relações e vínculos)</li>
          <li><strong>Comunitária</strong> (dinâmicas do dia a dia)</li>
          <li><strong>Social</strong> (cultura e estrutura)</li>
        </ul>
        <p className="mt-2">
          Nosso objetivo é iluminar os pontos cegos da sua jornada — com escuta, investigação e acolhimento.
          Atuamos como um "detetive com lanterna", ajudando você a enxergar padrões inconscientes que influenciam
          suas escolhas e emoções.
        </p>
      </section>

      <section className="p-6 border-b border-zinc-700">
        <h2 className="text-yellow-400 text-2xl mb-4">🧠 Serviços Oferecidos</h2>
        <p className="font-bold">Terapias disponíveis:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Psicoterapia para adolescentes, adultos e idosos</li>
          <li>Atendimento de emergência</li>
          <li>Aconselhamento para imigrantes</li>
          <li>Atendimento domiciliar e em locais públicos</li>
          <li>Terapia para diversas condições psicológicas</li>
        </ul>
        <p className="font-bold">Valores justos:</p>
        <ul className="list-disc list-inside">
          <li>Baixa renda: $25 por sessão</li>
          <li>Renda média: $50 por sessão</li>
          <li>Alta renda: $80 por sessão</li>
        </ul>
      </section>

      <section className="p-6 border-b border-zinc-700">
        <h2 className="text-yellow-400 text-2xl mb-4">📍 Onde Atendemos</h2>
        <p>
          Atendimento <strong>online para todo o Canadá</strong> e <strong>presencial em Toronto</strong>, com foco em locais públicos e visitas domiciliares.
        </p>
      </section>

      <section className="p-6 border-b border-zinc-700">
        <h2 className="text-yellow-400 text-2xl mb-4">📞 Entre em Contato</h2>
        <form className="max-w-lg mx-auto flex flex-col gap-4">
          <input type="text" placeholder="Nome" className="p-2 rounded-lg" required />
          <input type="email" placeholder="Email" className="p-2 rounded-lg" required />
          <input type="tel" placeholder="Telefone" className="p-2 rounded-lg" />
          <select className="p-2 rounded-lg">
            <option>Psicoterapia</option>
            <option>Aconselhamento</option>
            <option>Emergência</option>
            <option>Outro</option>
          </select>
          <textarea placeholder="Mensagem" rows="5" className="p-2 rounded-lg"></textarea>
          <button className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-xl" type="submit">
            Enviar Mensagem
          </button>
        </form>
        <div className="mt-6 text-center">
          <p><strong>Telefone:</strong> 647-461-6603</p>
          <p><strong>Email:</strong> <a href="mailto:biancamascolo@neuronest.com" className="text-yellow-400">biancamascolo@neuronest.com</a></p>
          <p><strong>Instagram:</strong> @neuronest (em breve)</p>
          <p><strong>Endereço:</strong> Toronto, ON</p>
        </div>
      </section>

      <section className="p-6 border-b border-zinc-700">
        <h2 className="text-yellow-400 text-2xl mb-4">📅 Agendamento Online (em breve)</h2>
        <p>Em breve você poderá escolher datas e horários diretamente pelo site.</p>
      </section>

      <section className="p-6">
        <h2 className="text-yellow-400 text-2xl mb-4">✨ Nossa Filosofia</h2>
        <p>
          <strong>Terapia não precisa durar para sempre.</strong> Acreditamos na eficiência, na escuta ativa
          e na construção de autonomia. Nosso foco é oferecer o suporte necessário para que você caminhe com segurança e consciência.
        </p>
      </section>

      <footer className="text-center bg-zinc-900 py-4 border-t border-yellow-400 text-sm text-zinc-400">
        &copy; 2025 NeuroNest - Todos os direitos reservados
      </footer>
    </div>
  );
}
