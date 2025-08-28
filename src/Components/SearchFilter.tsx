import { applyTheSearchFilter, populateCitySelectionBox, populateColonySelectionBox } from "../ClientCode/SearchFilter";
import { searchButtonCSS, searchDivCSS } from "../StyleSheets/SearchFilterSheet";
import { textInputCSS } from "../StyleSheets/SignUpStyleSheet";


export function SearchFilter() {

  return (

    <div>

      <div className='row'>

        <div className="col-lg-1"></div>

        <div className="col-lg-10" style={searchDivCSS}>

          <div className='row'>

            <div  className="col-lg-3">

              <select className="col-lg-12" style={textInputCSS} id="id_city" onClick={populateColonySelectionBox}>

                <option value = ''>Select City</option>

              </select>

            </div>
                
            <div  className="col-lg-3">

              <select className="col-lg-12" style={textInputCSS} id="id_colony">

                <option value = ''>Select Colony</option>

              </select>

            </div>
                
            <div  className="col-lg-3">

              <select className="col-lg-12" style={textInputCSS} id="id_asset_type">

                <option value = ''>Select Asset Type</option>
                <option value = 'Villa'>Villa</option>
                <option value = 'Plot'>Plot</option>
                <option value = 'Flat'>Flat</option>
                <option value = 'Land'>Land</option>
                <option value = 'Commercial'>Commercial</option>

              </select>

            </div>
                
            <div  className="col-lg-3">

              <button className="col-lg-12" style={searchButtonCSS} onClick={applyTheSearchFilter}>Search</button>

            </div>
                
          </div>

        </div>

        <div className="col-lg-1"></div>

      </div>

    </div>

  );
  
}

