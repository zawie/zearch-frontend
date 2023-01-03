
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
            Zearch is a hobby search engine built by me,
            <a href="https://zawie.io"> Adam Zawierucha</a>.
            It is built from the ground up and can be segmented into three distinct parts.
            First, I implemented a spider to scrape and index the websites.
            Second, I implemented a search engine which quickly finds websites based on your query using a minhashtable and comparing relative frequency of trigrams.
            Lastly, the I designed a built a slick frontend using React.
            I will describe each of these in distinct sections below.
        </Paragraph>
        <Paragraph style={{textAlign: "left"}}>
            All of the source code is open source, so feel free to take a peek! The <a href="https://github.com/zawie/zearch-frontend"> frontend repository is here </a> and the <a href="https://github.com/zawie/zearch-frontend"> backend repository is here </a>. 🚀
        </Paragraph>
    </div>   

    <div className='Section'>
        <h3> Architecture </h3>
        <img style={{maxHeight: 500, width: "auto"}} src={require('../resources/diagram.png')} />
        <Paragraph style={{textAlign: "left"}}>
            There are two functional components of this project.
        </Paragraph>
        <Paragraph style={{textAlign: "left"}}>
            First, we have crawlers, which scrape the web in order to create an index.
            Since this is compute intensive process that has constant workload, it was important to enable horizontal scaling via an AutoScaling group.
            An added benefit of using a group of EC2 Instances instead of one, is that we get multiple IPs, reducing the chance our scraper would be blocked.
            Moreover, in order to cost-save, I configured the autoscale group to exclusively use <a href="https://aws.amazon.com/ec2/spot/"> spot instances </a>, which can save up to 90% on compute resources!
            The limitation of spot instances is that they may not always be available and may be revoked with little warning. For our use case of scraping, neither of these limitations outweighed the cost savings.
        </Paragraph>
        <Paragraph style={{textAlign: "left"}}>
            When a processes in one of the instances of the AutoScaling finishes scraping a page, it enqueues the meta data and Minhashes it computed onto a <a href="https://aws.amazon.com/sqs/">SQS</a>.
            Later, another process will dequeue that information and store it on disk in a database. I chose to use this SQS to decouple the database from the crawlers, so it would be easy to swap or update the consumer of the information without causing data loss.
            Moreover, using a queue allows more effective batching when writing into the database.
        </Paragraph>
        <Paragraph style={{textAlign: "left"}}>
            Second, we have our engine which handles users' queries. 

            I chose to use a Java-based, embedded database, <a href="https://www.h2database.com/html/main.html"> H2 </a> since it is light-weight and easy to set up, while still having all the features I needed.
        </Paragraph>

        <Paragraph style={{textAlign: "left"}}>
            All of this architecture was orchistrated using <a href="https://aws.amazon.com/cloudformation/"> Cloud Formation Stacks </a>, which easily enables developers to write Infrastructure as Code.
        </Paragraph>
    </div>   

    {/* <div className='Section'>
        <h3> Spider </h3>
        <Paragraph style={{textAlign: "left"}}>
            A key component of a search engine is to "crawl" the internet for sites. This involves exploring lin
        </Paragraph>
    </div>    */}


   </div>
   <div className="Footer">
     <br/>
     <Text type="secondary"> Developed by <a href="https://zawie.io">Adam Zawierucha</a>.</Text>
     <br/>
   </div>
 </div>
  };
  
  export default AboutPage;