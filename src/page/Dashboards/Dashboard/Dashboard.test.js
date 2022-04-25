import { render,screen } from "@testing-library/react"
import Dashboard from "./Dashboard";



test('everything is running fine',()=>{
    render (<Dashboard/>);
    
    // eslint-disable-next-line testing-library/no-debugging-utils
    screen.debug();

})