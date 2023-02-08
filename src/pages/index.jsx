/*import ReactPlayer from 'react-player'
import Video from "../videos/video01.mp4"*/

export default function Index(){
  return (

  <div class="mx-auto bg-cyan-500 ">
    <div>
    <img src="https://consultoraecoambiental.com/wp-content/uploads/2023/02/portada-yaculap.png" alt=""/>
    </div>
    <div class="text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
      <a href="https://play.google.com/store/apps/details?id=com.paparazziteam.yakulap&hl=es&fbclid=IwAR2oUgQZEsQuWJi9A9_R1hvq-80s9s94Y73HefioQz_Z-r8T0kwXGfr79iw&pli=1" class="inline-block py-3 px-16 bg-black text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200" target="_blank" rel="noreferrer">Descarga YACU-LAP</a>
      <a href="#" class="inline-block py-3 px-16 bg-red-500 text-white font-bold border-transparent border-8 text-2xl rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200" target="_blank" rel="noreferrer">Conoce mas</a>
    </div>
    <div class="lg:container 2xl:w-3/5 mx-auto md:flex gap-5 md:w-full p-3 ">
                <div class="left bg-character-mario bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52 mx-auto">         
                    <div class="card text-center bg-white 2xl:w-5/6 mx-auto mt-72 rounded-2xl overflow-hidden xl:w-4/5">
                        {/* <div>
                            <ReactPlayer className="react-player"
                            url={Video} controls	playing
                          />
                        </div>*/}
                        <div class="content bg-wave-pattern bg-repeat-x relative -top-3">
                            <h3 class="font-black text-4xl py-10">Juega juntos</h3>
                            <p class="text-xl">Juega con tus amigos y profesores</p>
                            <a href="/#" class="xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group">
                                Ver modo de juego
                                <span class="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4"></span>
                            </a>
                        </div>
                        <div class="dots flex justify-between p-4">
                            <div class="dot h-3 w-3 bg-blue-600 rounded-full"></div>
                            <div class="dot h-3 w-3 bg-blue-600 rounded-full"></div>
                        </div>
                    </div>

                </div>

                <div class="right w-5/6 md:w-1/2 text-center mx-auto">
                    <h2 class="font-black text-white text-6xl py-8">Disponible ahora</h2>

                    <p class="font-bold text-white text-2xl mx-auto py-10 w-4/5">Aprende Ya!
                    Experimenta Ya!</p>

                    <p class="font-black text-white text-4xl mx-auto py-10 w-4/5">Aprende de manera divertida la ciencia</p>
                    <p class="text-white text-center w-4/5 mx-auto">
                    YAKU-LAB genera desafíos en diversas áreas, gamificando el aprendizaje de los estudiantesB
                    </p>
                    
                   
                    <div class="card text-center bg-white 2xl:w-5/6 mx-auto mt-16 rounded-2xl overflow-hidden xl:w-4/5">
                          {/*<div>
                              <ReactPlayer className="react-player"
                              url={Video} controls	playing
                            />
                         </div>*/}
                        <div class="content bg-wave-pattern bg-repeat-x relative -top-3">
                            <h3 class="font-black text-4xl py-8">Explora</h3>
                            <p class="text-xl">..........</p>
                            <a href="/#" class="xl:text-2xl my-4 inline-block py-2 px-16 bg-red-500 text-white font-black border-transparent border-8 rounded-3xl hover:border-gray-200 hover:bg-white hover:text-black transition duration-200 group">
                                Toma un vistazo!
                                <span class="w-4 h-4 inline-block border-yellow-300 border-solid border-t-[5px] border-r-[5px] transition-all transform rotate-45 group-hover:border-red-500 xl:group-hover:ml-4"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
  </div>

  );
}