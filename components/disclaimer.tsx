export function FooterDisclaimer({data}){
    return(
  <>
    <div className="p-10 rounded-3xl bg-black bg-opacity-75 border-4 border-white mx-auto max-w-5xl">
      <h2>{data.Title}</h2>
      <hr className="border-iwred my-5"></hr>
      <h4>{data.Text}</h4>
  </div>
      </>
    );
  }