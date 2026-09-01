import { useRef, useMemo, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { experience } from '../../data/portfolio';
import { FiBriefcase, FiBook, FiCalendar, FiMapPin, FiStar, FiGitCommit } from 'react-icons/fi';
import type { ExperienceItem } from '../../types';

type TimelineNodeType = 'main' | 'sub';

interface TimelineNode {
  id: string;
  type: TimelineNodeType;
  date?: string;
  title: string;
  description?: string;
  mainItem?: ExperienceItem;
  subItem?: any;
  isFuture?: boolean;
  noCard?: boolean;
}

export default function Experience() {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Flatten experience into nodes
  const timelineNodes = useMemo(() => {
    // Sort Oldest to Newest
    const sorted = [...experience].sort((a, b) => 
      new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
    );

    const nodes: TimelineNode[] = [];

    sorted.forEach(item => {
      // Main Node
      const mainNode: TimelineNode = {
        id: item.id,
        type: 'main',
        date: item.start,
        title: item.organization,
        description: item.title,
        mainItem: item,
      };

      // Sub Nodes (Projects/Achievements)
      const subNodes: TimelineNode[] = [];

      if (item.projects) {
        item.projects.forEach((proj, idx) => {
          subNodes.push({
            id: `${item.id}-proj-${idx}`,
            type: 'sub',
            title: proj.name,
            description: 'Project',
            subItem: proj,
            mainItem: item
          });
        });
      }

      if (item.details && item.type === 'work') {
         // Take top 2 details as sub-nodes
         item.details.slice(0, 2).forEach((detail, idx) => {
            subNodes.push({
                id: `${item.id}-detail-${idx}`,
                type: 'sub',
                title: 'Key Achievement',
                description: detail,
                subItem: { detail },
                mainItem: item
            });
         });
      }

      // Add to list: [Main Node (Older)] -> [Sub Nodes (Newer)]
      nodes.push(mainNode, ...subNodes);
    });

    // Add Future Nodes
    nodes.push(
        {
            id: 'future-1',
            type: 'main',
            date: 'Future',
            title: 'Senior Engineer',
            description: 'Leading major architectural initiatives',
            isFuture: true,
            mainItem: {
                id: 'future-1',
                type: 'work',
                organization: 'Future Role',
                title: 'Senior Engineer',
                location: 'Tech Hub',
                start: '2025',
                end: 'Future',
                startDate: '2025-01-01',
                description: 'Continuing to build scalable solutions and mentor others.',
                skills: ['Architecture', 'Leadership']
            }
        },
        {
            id: 'future-2',
            type: 'sub',
            title: 'Next Big Project',
            description: 'AI Integration Platform',
            isFuture: true,
            subItem: { url: '#' },
            noCard: true
        },
        {
            id: 'future-3',
            type: 'main',
            date: 'Future',
            title: 'Staff Engineer',
            description: 'Technical direction & Strategy',
            isFuture: true,
            mainItem: {
                id: 'future-3',
                type: 'work',
                organization: 'Future Role',
                title: 'Staff Engineer',
                location: 'Global',
                start: '2026',
                end: '',
                startDate: '2026-01-01',
                description: 'Driving technical strategy and cross-team architecture.',
                skills: ['Strategy', 'System Design']
            }
        },
        {
            id: 'future-4',
            type: 'sub',
            title: 'Next Big Project',
            isFuture: true,
            subItem: { url: '#' },
            noCard: true
        },
    );

    return nodes;
  }, []);

  // Path generation constants
  const MAIN_WIDTH = isMobile ? 0 : 350; // Reduced for better fit
  const SUB_WIDTH = isMobile ? 0 : 220; // Reduced for better fit
  const GAP = isMobile ? 0 : 60; // Adjusted gap
  const PADDING_X = isMobile ? 0 : 200; // Reduced padding
  const AMPLITUDE = 30;

  // Calculate positions
  const nodePositions = useMemo(() => {
    let currentX = PADDING_X;
    return timelineNodes.map(node => {
        const width = node.type === 'main' ? MAIN_WIDTH : SUB_WIDTH;
        const x = currentX + (width / 2);
        currentX += width + GAP;
        return { x, width };
    });
  }, [GAP, MAIN_WIDTH, PADDING_X, SUB_WIDTH, timelineNodes]);

  const TOTAL_WIDTH = nodePositions[nodePositions.length - 1].x + PADDING_X;

  const generatePath = () => {
    const points = timelineNodes.map((_, index) => {
        const { x } = nodePositions[index];
        const y = index % 2 === 0 ? -AMPLITUDE : AMPLITUDE;
        return { x, y };
    });

    if (points.length === 0) return '';

    let path = `M ${points[0].x} ${points[0].y}`; 
    
    for (let i = 0; i < points.length - 1; i++) {
        const current = points[i];
        const next = points[i + 1];
        
        const dist = next.x - current.x;
        const cp1x = current.x + (dist / 2);
        const cp1y = current.y;
        const cp2x = next.x - (dist / 2);
        const cp2y = next.y;
        
        path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
    }
    
    // Extend ends
    const first = points[0];
    const last = points[points.length - 1];
    
    path = `M ${first.x - 300} 0 C ${first.x - 150} 0, ${first.x - 150} ${first.y}, ${first.x} ${first.y}` + path.substring(path.indexOf('C'));
    path += ` C ${last.x + 150} ${last.y}, ${last.x + 150} 0, ${last.x + 300} 0`;

    return path;
  };

  // Map vertical scroll to horizontal movement
  // We want to scroll from 0 to -(TOTAL_WIDTH - windowWidth)
  // We use a large negative value to ensure we reach the end.
  // The user can adjust the height of the section to control speed.
  const x = useTransform(scrollYProgress, [0, 1], [0, -TOTAL_WIDTH + (typeof window !== 'undefined' ? window.innerWidth : 1000)]);

  if (isMobile) {
    return (
      <section className="min-h-screen bg-background py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 dark:text-white">
              Experience <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              My educational and professional journey 
            </p>
          </div>

          <div className="relative border-l-2 border-primary/30 ml-4 space-y-12">
            {timelineNodes.map((node) => {
              const isMain = node.type === 'main';
              return (
                <div key={node.id} className="relative pl-8">
                  {/* Dot */}
                  <div className={`
                    absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-surface
                    ${isMain ? 'w-5 h-5 -left-[11px]' : ''}
                  `} />
                  
                  {/* Date Label */}
                  {isMain && node.date && (
                    <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-primary bg-primary/10 rounded-full">
                      {node.date}
                    </span>
                  )}

                  {/* Card */}
                  <div className={`
                    rounded-xl bg-surface/90 backdrop-blur-sm border border-white/10 p-4 shadow-sm
                    ${node.isFuture ? 'opacity-70 grayscale' : ''}
                  `}>
                    {isMain ? (
                      <>
                        <div className="flex items-center gap-3 mb-3">
                          {node.mainItem?.logo ? (
                            <img src={node.mainItem.logo} alt={node.title} className="w-10 h-10 rounded-lg object-cover" />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                              {node.mainItem?.type === 'work' ? <FiBriefcase size={20} /> : <FiBook size={20} />}
                            </div>
                          )}
                          <div>
                            <h3 className="font-bold text-base dark:text-white">{node.title}</h3>
                            <p className="text-primary text-sm font-medium">{node.description}</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
                          {node.mainItem?.description}
                        </p>
                      </>
                    ) : (
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                          {node.subItem?.url ? <FiGitCommit size={14} /> : <FiStar size={14} />}
                          <span className="text-sm">{node.title}</span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {node.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[600vh] bg-background">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        
        <motion.div 
          className="w-full h-full flex items-center"
        >
        
        <div className="absolute top-24 md:top-32 left-0 w-full z-10 pointer-events-none flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 dark:text-white drop-shadow-lg">
            Experience <span className="text-gradient">Timeline</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 xl:text-lg drop-shadow-md max-w-2xl mx-auto">
            My professional journey and education
            </p>
        </div>

        <motion.div 
          style={{ x }}
          className="relative flex items-center h-full"
        >
           {/* Winding Path SVG */}
           <div className="absolute top-1/2 left-0 h-0 overflow-visible -z-10" style={{ width: TOTAL_WIDTH }}>
             <svg className="overflow-visible" width={TOTAL_WIDTH} height="600">
               <path 
                 d={generatePath()} 
                 fill="none" 
                 stroke="url(#gradient)" 
                 strokeWidth="4"
                 strokeLinecap="round"
                 className="opacity-50"
               />
               <defs>
                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                   <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
                 </linearGradient>
               </defs>
             </svg>
           </div>

          <div className="relative h-full">
          {timelineNodes.map((node, index) => {
             const { x, width } = nodePositions[index];
             const yOffset = index % 2 === 0 ? -AMPLITUDE : AMPLITUDE;
             const isMain = node.type === 'main';
             
             return (
            <div 
              key={node.id} 
              className="absolute top-1/2 group h-0"
              style={{ 
                  left: x,
                  width: width,
                  transform: `translate(-50%, ${yOffset}px)`
              }}
            >
              {/* Timeline Dot */}
              <div className={`
                  absolute left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary z-10 ring-4 ring-surface shadow-lg shadow-primary/50 flex items-center justify-center
                  ${isMain ? 'w-6 h-6 top-0' : 'w-4 h-4 top-0'}
              `}>
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              
              {/* Date Label on Line (Only for Main) */}
              {isMain && node.date && (
                <div className={`absolute left-1/2 -translate-x-1/2 text-sm font-bold text-primary/80 whitespace-nowrap
                   ${index % 2 === 0 ? 'top-6' : 'bottom-6'}
                `}>
                  {node.date}
                </div>
              )}

              {/* Card */}
              {!node.noCard && (
              <div className={`
                absolute w-full rounded-xl bg-surface/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300 border border-white/10 hover:border-primary/50
                ${index % 2 === 0 ? 'bottom-full mb-4' : 'top-full mt-4'}
                ${isMain ? 'p-6' : 'p-4'}
                ${node.isFuture ? 'blur-[2px] opacity-60 grayscale hover:blur-0 hover:opacity-100 hover:grayscale-0' : ''}
              `}>
                {isMain ? (
                    // Main Card Content
                    <>
                        <div className="flex items-center gap-4 mb-4">
                        {node.mainItem?.logo ? (
                            <img src={node.mainItem.logo} alt={node.title} className="w-12 h-12 rounded-lg object-cover" />
                        ) : (
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            {node.mainItem?.type === 'work' ? <FiBriefcase size={24} /> : <FiBook size={24} />}
                            </div>
                        )}
                        <div>
                            <h3 className="font-bold text-lg dark:text-white">{node.title}</h3>
                            <p className="text-primary font-medium">{node.description}</p>
                        </div>
                        </div>

                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <div className="flex items-center gap-2">
                            <FiCalendar className="text-primary" />
                            <span>{node.mainItem?.start} - {node.mainItem?.end || 'Present'}</span>
                        </div>
                        {node.mainItem?.location && (
                            <div className="flex items-center gap-2">
                            <FiMapPin className="text-primary" />
                            <span>{node.mainItem.location}</span>
                            </div>
                        )}
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
                        {node.mainItem?.description}
                        </p>
                    </>
                ) : (
                    // Sub Card Content
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-primary font-semibold">
                            {node.subItem?.url ? <FiGitCommit /> : <FiStar />}
                            <span className="text-sm">{node.title}</span>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            {node.description}
                        </p>
                        {node.subItem?.url && (
                             <a 
                                href={node.subItem.url}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xs text-primary hover:underline mt-1"
                              >
                                View Project ↗
                              </a>
                        )}
                    </div>
                )}
              </div>
              )}
              
              {/* Connecting Line (Vertical) */}
              <div className={`
                absolute left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-primary/50 to-transparent -z-10
                ${index % 2 === 0 ? 'bottom-1/2 h-12' : 'top-1/2 h-32'}
              `} />
            </div>
          )})}
          </div>
          
          {/* End padding */}
          <div className="w-[50vw] flex-shrink-0" />
        </motion.div>
        
        </motion.div>
      </div>
    </section>
  );
}
