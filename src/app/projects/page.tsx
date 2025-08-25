import Projects from "@/components/Projects"
import SmallProjects from "@/components/SmallProjects"

const Page = ()=>{

    return(
        <>
           <Projects page="projects" view="all"/>
           <SmallProjects/>
        </>
    )
}

export default Page