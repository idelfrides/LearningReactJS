import ControleAulas from "../components/ControleAulas" ;
import ShowClassesContent from "../components/ShowClassesContent";
import data from '../data.json';


function AulasCurso(){
    return (
        <>
            <ControleAulas number={16.5} title="Reapresentação o projeto" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />
               
            <ControleAulas number={16} title="React Icons" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />
   
            <ControleAulas number={15} title="Implementing React Router" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />

            <ControleAulas number={14} title="State Lift" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />
    
            <ControleAulas number={13} title="Lists renderization" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />
        
            <ControleAulas number={12} title="Conditional renderization" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />

            <ControleAulas number={11} title="Passing event/methos by props" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />
                
            <ControleAulas number={10} title="useState in action" />
            <ShowClassesContent contentArray={data.class_10.split('-')} />
            
            <ControleAulas number={9} title="Events in React" />
            <ShowClassesContent contentArray={data.class_9.split('-')} />
            
            <ControleAulas number={8} title="Getting Advanced in props" />
            <ShowClassesContent contentArray={data.class_8.split('-')} />
            
            <ControleAulas number={7} title="Using React Fragments" />
            <ShowClassesContent contentArray={data.class_7.split('-')} />

            <ControleAulas number={6} title="Inserting css in React" />
            <ShowClassesContent contentArray={data.class_6.split('-')} />

            <ControleAulas number={5} title="working with props"  />
            <ShowClassesContent contentArray={data.class_5.split('-')} />

            <ControleAulas number={4} title="Creating components in React" />
            <HelloWorld />
            <ShowClassesContent contentArray={data.class_4.split('-')} />

            <ControleAulas number={3} title="Understanding the JSX" />
            <ShowClassesContent contentArray={data.class_3.split('-')} />

            <ControleAulas number={2} title="How to install React ?" />
            <ShowClassesContent contentArray={data.class_2.split('-')} />

            <ControleAulas number={1} title="Introduction" />
            <ShowClassesContent contentArray={data.class_1.split('-')} />
        </>
    )
}

export default AulasCurso;