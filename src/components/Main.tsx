import { Button} from "./Button";
import { SectionForMain } from "./Section";
import '../css/stylesForMain.css';


export function Main ({func} : {func : () => void;}) {
     const textForButton = 'Testi başla';
 

    return(
        <main className="mainWrapper">
        <div className="divFirstPage">
            <SectionForMain />
          <div>
         <Button 
                text={textForButton}
                func={func}
                />
            </div>
        </div>
        </main>
    )
}