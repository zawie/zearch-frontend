
import { Typography } from 'antd'
import { PageHeader } from '@ant-design/pro-layout';
import icon from '../resources/icon.png';


import './AboutPage.css'

const { Text, Paragraph } = Typography

const AboutPage = () => {
    return <div className="App">
    <PageHeader className="TopBar"
     onBack={() => {window.location.href = '/';}}
     title="Zearch"
     avatar={{ shape: 'square', src: icon}}
   />
   <div className="AboutBody">
    
   <h1 className="Title"> About Zearch </h1>

    <div className='Section'>
        <h3> Introduction </h3>
        <Paragraph style={{textAlign: "left"}}>
            Zearch is a search engine built as a hobby project by me,
            <a href="https://zawie.io"> Adam Zawierucha</a>.
            It is built from the ground up and can be segmented into three distinct parts.
            First, I implemented a <a href="https://zawie.io">spider</a> to scrape and index the websites.
            Second, I implemented a <a href="https://zawie.io">search engine</a> which quickly finds websites based on your query using a minhashtable and comparing relative frequency of trigrams.
            Lastly, the <a href="https://zawie.io">frontend</a> was developed using React.
            I will describe each of these in distinct sections below.
        </Paragraph>
        <Paragraph style={{textAlign: "left"}}>
            All of the source code is open source, so feel free to take a peek! 🚀
        </Paragraph>
    </div>   

    <div className='Section'>
        <h3> Spider </h3>
        <Paragraph style={{textAlign: "left"}}>
            A key component of a search engine is to "crawl" the internet for sites. This involves exploring lin
        </Paragraph>
    </div>   


   </div>
   <div className="Footer">
     <br/>
     <Text type="secondary"> Developed by <a href="https://zawie.io">Adam Zawierucha</a>.</Text>
     <br/>
   </div>
 </div>
  };
  
  export default AboutPage;