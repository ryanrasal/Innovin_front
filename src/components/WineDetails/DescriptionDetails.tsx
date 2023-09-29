export default function DescriptionDetails({ wineDetail }) {
    return (
      <div className="md:w-[40vw]">
        <div className="flex justify-between items-center py-3">
          <h3 className="text-2xl">{wineDetail.name}</h3>
          {wineDetail.best_seller && (
            <div className="flex items-center">
              {/* <img className="h-7" src={star} alt="" /> */}
              <p>Meilleure vente</p>
            </div>
          )}
        </div>
        <hr />
        <h3 className="underline font-bold py-4">À propos de cet article</h3>
        <p className="pb-4 mx-10 md:mx-2">{wineDetail.description}</p>
        <p className="pb-4">
          <b>Marque</b> : Petrus
        </p>
        <p className="pb-4">
          <b>Age</b> : {wineDetail.year}
        </p>
        <hr />
        <div className="flex items-center justify-between bg-[#CBAF96] rounded-xl p-2 mt-5">
          {/* <img src={warning} alt="" /> */}
          <p>
            Interdiction de vente de boissons alcooliques aux mineurs de moins de
            18 ans. L’abus d’alcool est dangereux pour la santé. A consommer avec
            modération.
          </p>
        </div>
      </div>
    );
  }
  