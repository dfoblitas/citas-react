/* eslint-disable react/prop-types */
import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  return (
    <div className="md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ?  (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes </h2>
          <p className="text-lg mt-5 text-center mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          { pacientes.map( (paciente) => (
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              ></Paciente>
            ))
          }
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-lg mt-5 text-center mb-10">
            Comienza adicionando {''}
            <span className="text-indigo-600 font-bold">nuevos Pacientes</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
