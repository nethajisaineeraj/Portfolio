import awsworkshop from '../../images/awsworkshop.jpeg';
import daworkshop from '../../images/daworkshop.jpg';
import genaiworkshop from '../../images/genaiworkshop.jpeg';
import genaiworkshop2 from '../../images/genaiworkshop2.jpeg';
import mcpworkshop from '../../images/mcpworkshop.jpeg';

const attendedWorkshops = [
    {
        id: "mcpmegaworkshop",
        title: "MCP Mega Workshop",
        description: "During the MCP Mega Workshop, I built multiple automation systems using MCP (Model Context Protocol) servers, integrated with LinkedIn, Gmail, and phone call APIs. The projects were developed in Cursor IDE, leveraging AI-assisted coding and prompt orchestration to streamline workflows.",
        keyActivities: [
            "Built an MCP agent that auto-generates and publishes LinkedIn posts with text and images, reducing manual posting effort and ensuring consistency in content sharing.",
            "Developed a system to extract LinkedIn profile info and send personalized emails instantly, improving efficiency in networking and outreach tasks.",
            "Created a voice-based AI calling system capable of real-time interaction, integrating ElevenLabs for natural voice generation and Twilio for call handling."
        ],
        keyTakeaways: [
            "Learned to design end-to-end automation workflows by breaking complex problems into smaller tasks.",
            "Understood the importance of workflow planning before coding, which reduced debugging time.",
            "Gained resilience and patience while working with rapidly evolving AI tools and integrations."
        ],
        techStack: [
            "MCP Servers → workflow orchestration",
            "Cursor IDE → AI-assisted development",
            "LinkedIn API & Gmail API → automation",
            "ElevenLabs & Twilio → phone call agent"
        ],
        image: mcpworkshop,
        credentials: "http://cdn1.ccbp.in/misc/workshop-acad-mcp-mega-workshop-completion/7ZHFUKJT89.png"
    },
    {
        id: "awsmegaworkshop",
        title: "AWS Mega Workshop",
        description: "As part of the AWS Mega Workshop, I built and deployed a responsive food delivery website on AWS. The project gave me practical exposure to hosting and storage services, along with learning core AWS concepts for scalable deployment.",
        keyActivities: [
            "Deployed a responsive food delivery website using AWS EC2 for hosting.",
            "Configured an S3 bucket to store and serve website images.",
            "Explored and learned about AWS RDS (databases) and CloudFront (content delivery)."
        ],
        keyTakeaways: [
            "Learned how to deploy and host a website on AWS using EC2 and S3.",
            "Understood the role of S3 buckets in managing static assets.",
            "Gained conceptual knowledge of RDS and CloudFront for scalable applications."
        ],
        techStack: [
            "EC2 → Hosting the responsive website",
            "S3 → Image and asset storage",
            "RDS (learned) → Relational database concepts",
            "CloudFront (learned) → Content delivery concepts"
        ],
        image: awsworkshop,
        credentials: "http://cdn1.ccbp.in/misc/aws-workshop-completion-certificate/FEZFTCWQ3E.png"
    },
    {
        id: "generativeaiworkshop",
        title: "Generative AI Workshop",
        description: "As part of the Generative AI Workshop, I built a conversational chatbot powered by the OpenAI API, capable of replying in both text and my own cloned voice. This project combined conversational AI with voice synthesis to create a highly interactive experience.",
        keyActivities: [
            "Created a chatbot where users could ask questions via text and receive both textual responses and voice replies.",
            "Used PlayHT to clone my voice and generate realistic speech output.",
            "Integrated OpenAI API key for natural language processing and dialogue handling.",
            "Developed the prototype in Google Colab for rapid testing and iteration.",
            "Deployed the chatbot on Hugging Face Spaces for easy access and live demo."
        ],
        keyTakeaways: [
            "Learned how to integrate LLMs with custom voice synthesis to build human-like chatbots.",
            "Gained practical experience in prompt engineering and conversational flow design.",
            "Understood the full cycle of developing, testing, and deploying AI applications on cloud platforms."
        ],
        techStack: [
            "OpenAI API → conversational intelligence",
            "PlayHT → custom voice cloning & speech synthesis",
            "Google Colab → development environment",
            "Hugging Face Spaces → deployment & hosting"
        ],
        image: genaiworkshop,
        credentials: "http://cdn1.ccbp.in/misc/gen-ai-completion-cer/CE15662MKI.png"
    },
    {
        id: "generativeaiworkshop2",
        title: "Generative AI Workshop 2.0",
        description: "Participated in Generative AI Workshop 2.0 by NxtWave, where I explored 10+ AI tools and applied advanced concepts in prompt engineering. The workshop focused on transforming raw ideas into functional prototypes using AI-powered platforms.",
        keyActivities: [
            "Built a prototype project by moving from idea → execution → working demo using multiple AI tools.",
            "Explored and applied 10+ AI tools including ChatGPT, Microsoft Copilot, Namelix, Sologo AI, Gamma AI, Microsoft Designer, and more.",
            "Learned and practiced frameworks like RACEF (Role–Action–Context–Example–Format) and Chain of Thought (CoT) for structured prompt engineering.",
            "Experimented with AI-based design, branding, content generation, and prototyping tools to accelerate development."
        ],
        keyTakeaways: [
            "Understood how to leverage multiple AI tools together to build rapid prototypes.",
            "Learned prompt engineering strategies for better control over AI outputs.",
            "Realized the importance of iteration, creativity, and experimentation when working with generative AI.",
            "Experienced end-to-end product development flow — from ideation to a working prototype."
        ],
        techStack: [
            "ChatGPT", "Microsoft Copilot", "UserPersona.dev", "Namelix", "Sologo AI", "SmasherOfOdds", "Wegic AI", "FormShare", "Microsoft Designer", "Gamma AI", "Clipchamp",
            "Prompt Engineering Frameworks → RACEF, CoT"
        ],
        image: genaiworkshop2,
        credentials: "http://cdn1.ccbp.in/misc/gen-ai-mw-2-participation/CHTE0DE1E8.png"
    },
    {
        id: "dataanalyticsworkshop",
        title: "Data Analytics Workshop",
        description: "Participated in the Data Analytics Workshop by NxtWave, where I explored Microsoft Power BI to turn raw data into actionable insights. The workshop focused on building interactive dashboards that enable data-driven decision-making through effective visualization and analysis.",
        keyActivities: [
            "Built a comprehensive Power BI dashboard by following the full analytics workflow: data collection → cleaning → modeling → visualization → interactive reporting.",
            "Applied Microsoft Power BI functionalities including data modeling, DAX formulas, calculated columns/measures, filters, slicers, and interactive visualizations.",
            "Created dynamic charts, KPIs, maps, and tables to summarize complex datasets for business insights.",
            "Practiced dashboard design best practices, focusing on clarity, visual hierarchy, and interactivity for effective storytelling."
        ],
        keyTakeaways: [
            "Gained hands-on experience transforming raw data into visually compelling, interactive dashboards.",
            "Learned advanced Power BI techniques for data manipulation, trend analysis, and KPI tracking.",
            "Understood the importance of user-centric dashboard design for decision-making.",
            "Experienced the end-to-end analytics process, from data preparation to actionable insights."
        ],
        techStack: [
            "Microsoft Power BI", "Excel", "DAX (Data Analysis Expressions)", "Power Query"
        ],
        image: daworkshop,
        credentials: "http://cdn1.ccbp.in/misc/da-workshop-completion-certificate/SBSWLQX3HA.png"
    }
];

export default attendedWorkshops;
