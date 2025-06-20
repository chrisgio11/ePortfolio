"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  ArrowLeft, 
  FileText, 
  Edit3, 
  CheckCircle, 
  Calendar,
  User,
  Target,
  Lightbulb,
  MessageSquare
} from "lucide-react"
import Link from "next/link"

const majorAssignments = [
  {
    id: 1,
    title: "Research Paper: Digital Privacy in the Age of Social Media",
    description: "A comprehensive research paper examining the implications of social media on personal privacy and data security.",
    course: "ENC 1102",
    date: "November 2024",
    outcomes: ["Information Literacy", "Research Genre Production", "Contributing Knowledge"],
    artifacts: [
      {
        name: "Draft 1",
        description: "Initial research and outline",
        feedback: "Strong topic selection, but needs more specific thesis and better source integration",
        improvements: "Added clearer thesis statement and integrated more primary sources"
      },
      {
        name: "Draft 2", 
        description: "Revised with peer feedback",
        feedback: "Good structure, but argument needs stronger evidence and counterarguments",
        improvements: "Added counterarguments and strengthened evidence with recent case studies"
      },
      {
        name: "Final Draft",
        description: "Polished final version",
        feedback: "Excellent synthesis of sources and compelling argument",
        improvements: "Final polish on transitions and conclusion"
      }
    ],
    reflection: "This assignment taught me the importance of iterative writing and incorporating feedback. The multiple drafts helped me develop a stronger argument and better integrate sources. I learned that good writing is a process of continuous improvement."
  },
  {
    id: 2,
    title: "Rhetorical Analysis: Presidential Speech",
    description: "Analysis of rhetorical strategies used in a contemporary presidential address.",
    course: "ENC 1102", 
    date: "October 2024",
    outcomes: ["Generating Inquiry", "Multiple ways of writing"],
    artifacts: [
      {
        name: "Final Analysis",
        description: "Complete rhetorical analysis with multimedia elements",
        feedback: "Strong analysis of ethos, pathos, and logos with good use of visual aids",
        improvements: "Incorporated audience analysis and historical context"
      }
    ],
    reflection: "This assignment helped me understand how rhetoric works in real-world contexts. I enjoyed analyzing the visual and verbal elements together, which showed me how multimodal composition can enhance understanding."
  },
  {
    id: 3,
    title: "Annotated Bibliography: Cybersecurity Trends",
    description: "Comprehensive annotated bibliography covering current trends in cybersecurity.",
    course: "ENC 1102",
    date: "September 2024", 
    outcomes: ["Information Literacy", "Generating Inquiry"],
    artifacts: [
      {
        name: "Final Bibliography",
        description: "Complete annotated bibliography with 15+ sources",
        feedback: "Excellent source selection and thorough annotations",
        improvements: "Added more diverse source types and improved annotation depth"
      }
    ],
    reflection: "This project taught me how to evaluate sources critically and synthesize information from multiple perspectives. I learned the value of diverse source types in building a comprehensive understanding of a topic."
  },
  {
    id: 4,
    title: "Multimodal Project: Digital Storytelling",
    description: "A creative project combining text, images, and audio to tell a personal narrative.",
    course: "ENC 1102",
    date: "December 2024",
    outcomes: ["Multiple ways of writing", "Revision"],
    artifacts: [
      {
        name: "Storyboard",
        description: "Initial planning and visual outline",
        feedback: "Creative concept, needs clearer narrative structure",
        improvements: "Refined story arc and added more visual elements"
      },
      {
        name: "Final Project",
        description: "Complete digital story with audio narration",
        feedback: "Beautiful integration of multiple modes, compelling narrative",
        improvements: "Enhanced audio quality and refined visual transitions"
      }
    ],
    reflection: "This project pushed me to think beyond traditional text-based writing. I discovered how different modes can work together to create meaning and how revision applies to multimodal composition as well."
  }
]

export default function MajorAssignments() {
  const [selectedAssignment, setSelectedAssignment] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">ENC 1102 ePortfolio</span>
            </div>
            <Link href="/">
              <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Major
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Assignments
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A comprehensive collection of my major writing assignments throughout the semester, showcasing my growth in academic writing, research, and critical thinking.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Research Papers
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Rhetorical Analysis
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Multimodal Projects
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm bg-gray-800 text-cyan-300 border-gray-700">
              Multiple Drafts
            </Badge>
          </div>
        </div>
      </section>

      {/* Assignments Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Assignment Portfolio</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Each assignment demonstrates different aspects of my learning journey, with detailed reflections on the writing process and revisions made based on feedback.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {majorAssignments.map((assignment) => (
              <Card 
                key={assignment.id}
                className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAssignment(selectedAssignment === assignment.id ? null : assignment.id)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {assignment.course}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {assignment.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-white mb-3">
                    {assignment.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 leading-relaxed">
                    {assignment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-cyan-400 mb-2">Learning Outcomes Addressed:</h4>
                    <div className="flex flex-wrap gap-2">
                      {assignment.outcomes.map((outcome) => (
                        <Badge key={outcome} variant="secondary" className="text-xs bg-cyan-900/30 text-cyan-300 border-cyan-700">
                          {outcome}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {selectedAssignment === assignment.id && (
                    <div className="mt-6 space-y-6">
                      <div>
                        <h4 className="text-sm font-medium text-purple-400 mb-3 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Reflection
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {assignment.reflection}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium text-green-400 mb-3 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          Artifacts & Drafts
                        </h4>
                        <Tabs defaultValue="draft-1" className="w-full">
                          <TabsList className="grid w-full grid-cols-3 bg-gray-700">
                            {assignment.artifacts.map((artifact, index) => (
                              <TabsTrigger 
                                key={index}
                                value={`draft-${index + 1}`}
                                className="text-xs data-[state=active]:bg-cyan-600"
                              >
                                {artifact.name}
                              </TabsTrigger>
                            ))}
                          </TabsList>
                          {assignment.artifacts.map((artifact, index) => (
                            <TabsContent key={index} value={`draft-${index + 1}`} className="mt-4">
                              <Card className="border-gray-600 bg-gray-700/50">
                                <CardContent className="p-4 space-y-3">
                                  <div>
                                    <h5 className="text-sm font-medium text-white mb-1">Description</h5>
                                    <p className="text-gray-300 text-sm">{artifact.description}</p>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-medium text-white mb-1 flex items-center">
                                      <MessageSquare className="h-4 w-4 mr-2" />
                                      Feedback Received
                                    </h5>
                                    <p className="text-gray-300 text-sm">{artifact.feedback}</p>
                                  </div>
                                  <div>
                                    <h5 className="text-sm font-medium text-white mb-1 flex items-center">
                                      <CheckCircle className="h-4 w-4 mr-2" />
                                      Improvements Made
                                    </h5>
                                    <p className="text-gray-300 text-sm">{artifact.improvements}</p>
                                  </div>
                                </CardContent>
                              </Card>
                            </TabsContent>
                          ))}
                        </Tabs>
                      </div>
                    </div>
                  )}

                  <Button 
                    variant="ghost" 
                    className="w-full mt-4 text-cyan-400 hover:text-cyan-300 hover:bg-cyan-900/20"
                  >
                    {selectedAssignment === assignment.id ? "Hide Details" : "View Details"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-semibold">ENC 1102 ePortfolio</span>
          </div>
          <p className="text-gray-400 mb-4">Major Assignments - Showcasing Academic Growth</p>
          <p className="text-sm text-gray-500">Created as part of Professor Mainer's English Composition II course</p>
        </div>
      </footer>
    </div>
  )
} 