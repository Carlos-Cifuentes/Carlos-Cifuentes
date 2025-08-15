import React from 'react'
import styled from 'styled-components';
import { RiJavascriptFill,RiVercelFill } from "react-icons/ri";
import { SiPhp,SiVercel} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import paypalIcon from '../assets/paypal.png'
import phpmailerIcon from '../assets/phpmailer2.jpg'
import mysqlIcon from '../assets/mysql.png'
import wompiIcon from '../assets/icon_wompi.png'
import lazyIcon from '../assets/lazy-loading.png'
import seoIcon from '../assets/seo.png'
import sqlserverIcon from '../assets/sql-server.png'
import typescriptIcon from '../assets/typescript.svg'
import apirestIcon from '../assets/api.png'
import bootstrapIcon from '../assets/Bootstrap_logo.png'
import cssIcon from '../assets/css-3.png'

const technologyMap = {
  javascript: {
    label: "JavaScript",
    icon: <RiJavascriptFill className='svg-icon' />
  },
  php: {
    label: "PHP",
    icon: <SiPhp className='svg-icon2' />
  },
  mysql: {
    label: "MySQL",
    icon: <img src={mysqlIcon} alt="MySQL" className='svg-icon5' />
  },
  phpmailer: {
    label: "PHPMailer",
    icon: <img src={phpmailerIcon} alt="PHPMailer" className='svg-icon3' />
  },
  paypal: {
    label: "PayPal",
    icon: <img src={paypalIcon} alt="PayPal" className='svg-icon4' />
  },
  wompi: {
    label: "Wompi",
    icon: <img src={wompiIcon} alt="Wompi" className='svg-icon4' />
  },
  lazyload: {
    label: "Lazy Load",
    icon: <img src={lazyIcon} alt="Lazy Loading" className='svg-icon4' />
  },
  seo: {
    label: "SEO",
    icon: <img src={seoIcon} alt="SEO" className='svg-icon4' />
  },
  typescript: {
    label: "TypeScript",
    icon: <img src={typescriptIcon} alt="TypeScript" className='svg-icon4' />
  },
  sqlserver: {
    label: "SQL Server",
    icon: <img src={sqlserverIcon} alt="SQL Server" className='svg-icon4' />
  },
  apirest: {
    label: "API Restful",
    icon: <img src={apirestIcon} alt="API Restful" className='svg-icon4' />
  },
  github: {
    label: "GitHub",
    icon: <FaGithub className='svg-icon4'/>
  },
  vercel: {
    label: "Vercel",
    icon: <SiVercel className='svg-icon4'/>
  },
  bootstrap: {
    label: "Bootstrap",
    icon: <img src={bootstrapIcon} alt="Bootstrap" className='svg-icon6' />
  },
  css: {
    label: "CSS",
    icon: <img src={cssIcon} alt="CSS" className='svg-icon4' />
  }
};

const Technologies = ({ techList = [] }) => {
  return (
    <>
      <p className="text-sm text-gray-400 mb-2">Technology stack</p>
      <StyledWrapper>
        {techList.map((tech, index) => {
          const item = technologyMap[tech];
          return item ? (
            <button className="button" key={index} data-aos="fade-up">
              {item.icon}
              <span className="lable">{item.label}</span>
            </button>
          ) : null;
        })}
      </StyledWrapper>
    </>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 12px 8px 16px;
    gap: 8px;
    height: 40px;
    width: 140px;
    border: none;
    background: #056bfa27;
    border-radius: 10px;
    cursor: pointer;
  }

  .lable {
    margin-top: 1px;
    font-size: 14px;
    line-height: 22px;
    color: #fff;
    letter-spacing: 1px;
  }

  .button:hover {
    background: #056bfa49;
  }

  .svg-icon {
    height: 30px;
    width: 30px;
    color:#ffd60a;
  }

  .svg-icon2 {
    height: 30px;
    width: 30px;
    color:#bdb2ff;
  }

  .svg-icon3 {
    height: 20px;
    width: 20px;
    color:#bdb2ff;
  }

  .svg-icon4 {
    height: 20px;
    width: 20px;
  }

  .svg-icon5 {
    height: 20px;
    width: 20px;
  }
  
  .svg-icon6 {
    height: 20px;
    width: 25px;
  }
  }`;


export default Technologies
