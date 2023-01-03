import { Typography} from 'antd';
import { EllipsisConfig } from 'antd/es/typography/Base';
import './Result.css';
import { Result } from '../../helpers/engineInterface'

const { Paragraph, Text } = Typography;


type ResultProps = {
    result: Result
}

const ResultCard = ({result}: ResultProps) => {
    const {title, description, url, keywords} = result;

    const favicon_src = url.protocol+"//"+url.hostname+"/favicon.ico"
    const favicon = <img height={14} src={favicon_src} alt=""/>

    console.log(favicon)
    return <div className="ResultCardOuter">
            <a href={url.href} style={{textDecoration: 'none'}}>
                <div className="ResultCardInner">
                    <Text 
                        disabled
                        ellipsis={{ rows: 1, expandable: false } as EllipsisConfig}
                    > 
                        {favicon}
                        &nbsp;
                        {url.hostname} 
                        &nbsp;
                        { result.nsfw && <Text type='secondary' style={{color: 'red', borderStyle: "solid", borderWidth: 1, borderColor: 'red'}}>NSFW</Text>}
                    </Text>
                    <Text 
                        strong
                        ellipsis={{ rows: 1, expandable: false } as EllipsisConfig}
                    > 
                        <a>{title || url.toString()} </a>
                    </Text>
                    <Paragraph
                        type="secondary" 
                        style={{width: "100%", textAlign:"left"}} 
                        ellipsis={{ rows: 3, expandable: false } as EllipsisConfig}
                    >
                        {description || keywords || "No description"}
                    </Paragraph>
                </div>
            </a>
        </div>;
    };
  
  export default ResultCard;