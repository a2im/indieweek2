import MyButton from "./button"

export default function HelpSection({data, help}){  
    if (data.data.attributes?.isActive === true) return (
            <div className="mx-auto max-w-5xl pt-20">
              <div className="grid grid-cols-0 md:grid-cols-2 gap-10">
              {help.data.attributes.Help.map(Help => ((Help.Type === "A" ? <div key={Help.id} className="px-10 py-5 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto ">
                  <h4 className="mx-auto text-center font-bold text-5xl animate-pulse uppercase">{Help.Title}</h4>
                  <hr className="m-3 border-iwred mx-10"></hr>
                  <h4 className="mx-auto text-center mb-5">{Help.Text}</h4>
                      {Help.Button.map(Button => (
                        <div key={Button.id}>
                        <MyButton type={Button.NavType} href={Button.URL}>{Button.Text}</MyButton>
                        </div>
                      ))}
                </div> 
                : 
                <div key={Help.id} className="flex px-10 py-5 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto items-center justify-center">
                  <div>

                    <div className="grid grid-cols-0 items-center justify-center">
                      {Help.Button.map(Button => (
                        <>
                        <div key={Button.id} className="py-3">
                        <MyButton type={Button.NavType} href={Button.URL}>{Button.Text}</MyButton>
                        </div>
                        <hr className="m-3 border-iwred mx-2 last:hidden"></hr>
                        </>
                      ))}
                      </div>
                      </div>
                </div>
                )
                  
              ) )}
  </div>
  </div>
  )
  else return (
    <></>
  )
  }