import { Typography } from 'antd';
import { EllipsisConfig } from 'antd/es/typography/Base';
import './Result.css';
import { Result } from '../../helpers/engineInterface'

const { Paragraph, Text, Link } = Typography;


type ResultProps = {
    result: Result
}

const ResultCard = ({result}: ResultProps) => {
    const {title, description, url} = result;

    return <div className="ResultCardOuter">
            <a href={url.href} style={{textDecoration: 'none'}}>
                <div className="ResultCardInner">
                    <Text disabled> {url.host} </Text>
                    <Link strong> {title} </Link>
                    <Paragraph
                        type="secondary" 
                        style={{width: "100%", textAlign:"left"}} 
                        ellipsis={{ rows: 3, expandable: false } as EllipsisConfig}
                    >
                            {description}
                    </Paragraph>
                </div>
            </a>
        </div>;
    };
  
  export default ResultCard;