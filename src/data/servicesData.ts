import type { Division } from '../types';

export const DIVISIONS: Division[] = [
  {
    id: 'software',
    name: 'SOFTWARE SOLUTIONS',
    tagline: 'High-Performance Architectures & Intelligent Systems',
    badge: 'Digital Engineering',
    accentColor: '#00E5FF',
    borderColor: 'rgba(0, 229, 255, 0.35)',
    glowColor: 'rgba(0, 119, 254, 0.4)',
    iconName: 'Code2',
    description: 'Engineering robust, scalable, and intelligent software ecosystems tailored to automate enterprise operations and deliver engaging digital experiences.',
    services: [
      {
        id: 'web-dev',
        title: 'Web Development',
        description: 'Modern, high-performance web applications built on secure, scalable, and responsive cloud-ready architectures.',
        capabilities: ['Custom Web Applications', 'API & Cloud Architecture', 'Responsive UI/UX Engine', 'Performance & Security Optimization']
      },
      {
        id: 'ui-ux',
        title: 'UI/UX Designing',
        description: 'Human-centered, visually stunning interface designs focused on intuition, elegance, and seamless user interaction journeys.',
        capabilities: ['Design System Architecture', 'Interactive Wireframing & Prototyping', 'Cross-Platform Experience Design', 'Accessibility & Usability Audits']
      },
      {
        id: 'sop-dev',
        title: 'SOP Development',
        description: 'Standard Operating Procedure frameworks engineered to structure, standardize, and scale organizational workflows and technical compliance.',
        capabilities: ['Operational Architecture Mapping', 'Standard Operating Procedures Documentation', 'Quality Assurance Protocols', 'Audit & Compliance Alignment']
      },
      {
        id: 'web-automation',
        title: 'Web Automation',
        description: 'Automated data extraction, automated testing suites, and robotic web processes that minimize manual workloads and maximize speed.',
        capabilities: ['Automated Web Scrapers & Crawlers', 'End-to-End Automated Testing', 'Portal & Data Pipeline Synchronization', 'Headless Browser Orchestration']
      },
      {
        id: 'workflow-automation',
        title: 'Workflow Automation',
        description: 'End-to-end integration of distributed tools, APIs, and business systems to eliminate operational friction and boost velocity.',
        capabilities: ['Multi-System API Integration', 'Enterprise Task & Process Automation', 'Data Ingestion & Routing Pipelines', 'Event-Driven Automated Triggers']
      }
    ]
  },
  {
    id: 'hardware',
    name: 'HARDWARE SOLUTIONS',
    tagline: 'Embedded Intelligence & Physical Computing',
    badge: 'Embedded Systems',
    accentColor: '#38BDF8',
    borderColor: 'rgba(56, 189, 248, 0.35)',
    glowColor: 'rgba(2, 132, 199, 0.4)',
    iconName: 'Cpu',
    description: 'Transforming hardware concepts into reliable embedded devices, specialized printed circuit boards, and robust industrial automation infrastructures.',
    services: [
      {
        id: 'iot-projects',
        title: 'IoT Projects',
        description: 'Connected smart devices with low-latency telemetry, sensor networks, and bidirectional cloud telemetry integration.',
        capabilities: ['Smart Sensor & Telemetry Integration', 'Low-Power Wide-Area Networking (LPWAN)', 'Cloud IoT Gateway Synchronization', 'Edge Firmware Development']
      },
      {
        id: 'pcb-design',
        title: 'PCB Design',
        description: 'Precision schematic capture, multi-layer circuit layout, signal integrity verification, and production-ready fabrication files.',
        capabilities: ['Multi-layer PCB Layout Design', 'Component Placement & Thermal Analysis', 'Signal Integrity & EMC Shielding', 'Gerber & BoM Production Preparation']
      },
      {
        id: 'industrial-automation',
        title: 'Industrial Automation',
        description: 'Robust programmable control, industrial sensor integration, and SCADA-compatible monitoring for manufacturing and heavy machinery.',
        capabilities: ['PLC & Controller Programming', 'Industrial Sensor Interfacing', 'Factory Floor Diagnostics & Telemetry', 'Safety Interlock & Relay Systems']
      },
      {
        id: 'home-automation',
        title: 'Home Automation',
        description: 'Seamless smart home ecosystems combining lighting, climate control, energy management, and centralized intelligent controllers.',
        capabilities: ['Integrated Smart Lighting & Power', 'Climate & Environmental Monitoring', 'Security & Access Control Hardware', 'Unified Control Hub Protocols']
      }
    ]
  },
  {
    id: 'creative',
    name: 'CREATIVE SOLUTIONS',
    tagline: 'Generative Media & High-Impact Digital Visuals',
    badge: 'Digital Media',
    accentColor: '#FF6A00',
    borderColor: 'rgba(255, 106, 0, 0.45)',
    glowColor: 'rgba(255, 106, 0, 0.35)',
    iconName: 'Sparkles',
    description: 'Harnessing advanced generative AI pipelines and creative media engineering to produce cinematic visuals, synthetic video, and high-impact digital content.',
    services: [
      {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'High-impact multimedia content, technical storytelling, and engaging visual assets engineered to elevate brand presence.',
        capabilities: ['Corporate & Technical Copywriting', 'Digital Brand Asset Design', 'Interactive Presentation Materials', 'Cross-Channel Campaign Content']
      },
      {
        id: 'ai-video-creation',
        title: 'AI Video Creation',
        description: 'Cutting-edge AI-synthesized motion graphics, cinematic transitions, animated product visuals, and conceptual brand video production.',
        capabilities: ['Generative Video Synthesis', 'Motion Graphic Animation & Renders', 'Cinematic Concept Videos', 'Dynamic Visual Effects (VFX)']
      },
      {
        id: 'ai-image-creation',
        title: 'AI Image Creation',
        description: 'Ultra-high-definition generative imagery, 3D concept art, visual branding assets, and tailored promotional illustrations.',
        capabilities: ['Photorealistic AI Imagery Generation', '3D Tech Art & Conceptual Visuals', 'Stylized Brand Concept Graphics', 'High-Resolution Visual Assets']
      }
    ]
  }
];
