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
  MessageSquare,
  Search,
  Database,
  Zap,
  Eye,
  Volume2
} from "lucide-react"
import Link from "next/link"

const assignmentData = {
  title: "Rhetorical Analysis: Presidential Speech",
  subtitle: "Major Assignment 2",
  description: "A multimodal rhetorical analysis examining the persuasive strategies used in a contemporary presidential address, combining text analysis with visual and audio elements.",
  course: "ENC 1102",
  date: "October 2024",
  outcomes: ["Generating Inquiry", "Multiple ways of writing"],
  wordCount: "1,800 words",
  speechAnalyzed: "2024 State of the Union Address",
  multimodalElements: ["Text analysis", "Visual aids", "Audio clips", "Infographics"],
  analysis: [
    {
      name: "Ethos Analysis",
      description: "Examination of speaker credibility and character",
      findings: "Analysis of how the speaker establishes authority through personal background, policy achievements, and connection to American values. Examined use of personal anecdotes and references to historical precedents.",
      examples: "References to personal family history, mentions of bipartisan achievements, appeals to American exceptionalism"
    },
    {
      name: "Pathos Analysis", 
      description: "Analysis of emotional appeals and audience connection",
      findings: "Investigation of emotional strategies including patriotic appeals, concern for future generations, and calls for unity. Analyzed tone, word choice, and delivery techniques that evoke specific emotional responses.",
      examples: "Stories of individual Americans, references to national challenges, calls for collective action"
    },
    {
      name: "Logos Analysis",
      description: "Examination of logical arguments and evidence",
      findings: "Analysis of how the speaker uses statistics, policy proposals, and logical reasoning to support arguments. Examined structure of arguments and use of evidence to persuade audience.",
      examples: "Economic statistics, policy comparisons, cause-and-effect reasoning, expert testimony"
    }
  ],
  reflection: "This assignment helped me understand how rhetoric works in real-world contexts beyond traditional academic writing. I enjoyed analyzing the visual and verbal elements together, which showed me how multimodal composition can enhance understanding and create more compelling arguments. The process of breaking down a complex speech into its rhetorical components taught me to think critically about how persuasion works across different modes of communication. I also learned how to effectively integrate multiple types of evidence and analysis into a cohesive argument.",
  keyLearning: [
    "How to analyze rhetorical strategies across multiple modes",
    "The importance of considering audience and context in analysis",
    "How to integrate visual and textual evidence effectively",
    "The value of multimodal composition in academic writing",
    "How to structure complex analysis with clear organization"
  ],
  artifacts: [
    {
      name: "Speech Transcript",
      description: "Complete transcript of the analyzed presidential address",
      type: "Primary Source"
    },
    {
      name: "Rhetorical Analysis Paper",
      description: "1,800-word analysis with multimodal elements",
      type: "Analysis Document"
    },
    {
      name: "Visual Aids",
      description: "Infographics and charts supporting the analysis",
      type: "Multimodal Elements"
    },
    {
      name: "Audio Clips",
      description: "Selected audio segments with analysis",
      type: "Multimodal Elements"
    }
  ],
  feedback: {
    strengths: "Excellent analysis of ethos, pathos, and logos with good use of visual aids. Strong integration of multimodal elements that enhance rather than distract from the analysis. Good attention to context and audience considerations.",
    improvements: "Could have incorporated more audience analysis and historical context. Consider how the speech fits into broader political discourse and historical patterns of presidential rhetoric.",
    grade: "A-",
    comments: "This is a sophisticated piece of rhetorical analysis that demonstrates strong critical thinking skills and effective use of multimodal composition."
  }
}

export default function MajorAssignment2() {
  const [activeTab, setActiveTab] = useState("overview")

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
            <div className="flex space-x-4">
              <Link href="/major-assignments">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Assignments
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="text-gray-300 hover:text-white hover:bg-gray-800">
                  Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Badge variant="outline" className="mb-4 border-cyan-600 text-cyan-400">
              {assignmentData.subtitle}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {assignmentData.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl leading-relaxed">
              {assignmentData.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Calendar className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Date</p>
                <p className="text-white font-medium">{assignmentData.date}</p>
              </CardContent>
            </Card>
            <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <FileText className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Word Count</p>
                <p className="text-white font-medium">{assignmentData.wordCount}</p>
              </CardContent>
            </Card>
            <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Volume2 className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Speech Analyzed</p>
                <p className="text-white font-medium text-sm">2024 State of the Union</p>
              </CardContent>
            </Card>
            <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Eye className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Multimodal Elements</p>
                <p className="text-white font-medium">4 Types</p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-3">Learning Outcomes Addressed:</h3>
            <div className="flex flex-wrap gap-2">
              {assignmentData.outcomes.map((outcome) => (
                <Badge key={outcome} variant="secondary" className="bg-cyan-900/30 text-cyan-300 border-cyan-700">
                  {outcome}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-700 mb-8">
              <TabsTrigger value="overview" className="data-[state=active]:bg-cyan-600">Overview</TabsTrigger>
              <TabsTrigger value="analysis" className="data-[state=active]:bg-cyan-600">Rhetorical Analysis</TabsTrigger>
              <TabsTrigger value="reflection" className="data-[state=active]:bg-cyan-600">Reflection</TabsTrigger>
              <TabsTrigger value="artifacts" className="data-[state=active]:bg-cyan-600">Artifacts</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Assignment Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Analysis Focus</h4>
                    <p className="text-gray-300 leading-relaxed">
                      This rhetorical analysis examined the 2024 State of the Union Address, analyzing how the speaker 
                      used various persuasive strategies to connect with the audience and advance policy positions. 
                      The analysis went beyond traditional text-based examination to incorporate visual and audio elements, 
                      demonstrating how multimodal composition can enhance rhetorical analysis.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Multimodal Elements</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {assignmentData.multimodalElements.map((element, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/50 rounded-lg">
                          <div className="p-2 bg-cyan-900/30 rounded-lg">
                            <FileText className="h-4 w-4 text-cyan-400" />
                          </div>
                          <span className="text-gray-300">{element}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Questions Explored</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• How does the speaker establish credibility and authority?</li>
                      <li>• What emotional appeals are used to connect with the audience?</li>
                      <li>• How are logical arguments structured and supported?</li>
                      <li>• How do visual and audio elements enhance the rhetorical impact?</li>
                      <li>• What role does context and audience play in the speech's effectiveness?</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analysis" className="space-y-8">
              <div className="space-y-6">
                {assignmentData.analysis.map((section, index) => (
                  <Card key={index} className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">{section.name}</CardTitle>
                      <CardDescription className="text-gray-300">
                        {section.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-cyan-400 mb-2">Key Findings</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{section.findings}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-green-400 mb-2">Examples Analyzed</h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{section.examples}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reflection" className="space-y-8">
              <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-cyan-400" />
                    Personal Reflection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {assignmentData.reflection}
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">Key Takeaways</h4>
                  <ul className="text-gray-300 space-y-2">
                    {assignmentData.keyLearning.map((learning, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        {learning}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-green-400" />
                    Instructor Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="text-sm font-medium text-green-400 mb-2">Strengths</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{assignmentData.feedback.strengths}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-yellow-400 mb-2">Areas for Improvement</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{assignmentData.feedback.improvements}</p>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-cyan-400 mb-2">Overall Comments</h5>
                    <p className="text-gray-300 text-sm leading-relaxed">{assignmentData.feedback.comments}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-white">Grade:</span>
                    <Badge variant="secondary" className="bg-green-900/30 text-green-300 border-green-700">
                      {assignmentData.feedback.grade}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="artifacts" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {assignmentData.artifacts.map((artifact, index) => (
                  <Card key={index} className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="text-white">{artifact.name}</CardTitle>
                      <Badge variant="outline" className="w-fit border-gray-600 text-gray-300">
                        {artifact.type}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 leading-relaxed">
                        {artifact.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-semibold">ENC 1102 ePortfolio</span>
          </div>
          <p className="text-gray-400 mb-4">Major Assignment 2 - Rhetorical Analysis</p>
          <p className="text-sm text-gray-500">Created as part of Professor Mainer's English Composition II course</p>
        </div>
      </footer>
    </div>
  )
} 