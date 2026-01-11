export default function Contact() {
  return (
    <form className="mb-32 grid grid-cols-1 gap-8 rounded-lg border border-zinc-600 bg-green-200/10 p-8 shadow">
      <div className="grid grid-cols-1 gap-1">
        <h3 className="text-xl font-bold">Pedir reserva</h3>
        <p className="text-sm text-zinc-400">
          Rellena el formulario y te contactaremos en menos de 24 horas.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {/* NOMBRE COMPLETO */}
        <div className="grid grid-cols-1 gap-2">
          <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            Nombre Completo
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full rounded-md border border-zinc-600 p-2 focus:outline-2 focus:outline-lime-400"
          ></input>
        </div>

        {/* EMAIL */}
        <div className="grid grid-cols-1 gap-2">
          <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            Email
          </label>
          <input
            type="email"
            placeholder="john@example.com"
            className="w-full rounded-md border border-zinc-600 p-2 focus:outline-2 focus:outline-lime-400"
          ></input>
        </div>

        {/* NUMERO DE HUESPEDES */}
        <div className="grid grid-cols-1 gap-2">
          <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            Número de huéspedes
          </label>
          <input
            type="number"
            placeholder="3"
            className="w-full rounded-md border border-zinc-600 p-2 focus:outline-2 focus:outline-lime-400"
            max={7}
            min={2}
          ></input>
        </div>

        {/* FECHAS INICIO Y FIN */}
        <div className="grid grid-cols-2 gap-2">
          <div className="grid grid-cols-1 gap-2">
            <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Llegada
            </label>
            <input
              type="date"
              className="rounded-md border border-zinc-600 p-2 focus:outline-2 focus:outline-lime-400"
            ></input>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Salida
            </label>
            <input
              type="date"
              className="rounded-md border border-zinc-600 p-2 focus:outline-2 focus:outline-lime-400"
            ></input>
          </div>
        </div>

        {/* MENSAJE */}
        <div className="grid grid-cols-1 gap-2">
          <label className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
            Mensaje
          </label>
          <textarea
            className="w-full rounded-md border border-zinc-600 p-2 focus:outline-1 focus:outline-lime-400"
            rows={5}
          ></textarea>
        </div>

        {/* SUBMIT Y ERROR */}
        <div className="grid grid-cols-1 gap-2">
          <span className="w-full text-center text-red-400"></span>
          <input
            type="submit"
            value={"Enviar Consulta"}
            className="rounded-md bg-lime-400 px-2 py-4 font-semibold text-black"
          ></input>
        </div>
      </div>
    </form>
  );
}
