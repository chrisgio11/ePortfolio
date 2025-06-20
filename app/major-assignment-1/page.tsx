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
  Zap
} from "lucide-react"
import Link from "next/link"

const assignmentData = {
  title: "Research Paper: Digital Privacy in the Age of Social Media",
  subtitle: "Major Assignment 1",
  description: "A comprehensive research paper examining the implications of social media on personal privacy and data security, demonstrating the iterative writing process through multiple drafts.",
  course: "ENC 1102",
  date: "November 2024",
  outcomes: ["Information Literacy", "Research Genre Production", "Contributing Knowledge"],
  wordCount: "2,500 words",
  sources: "15+ academic sources",
  drafts: [
    {
      name: "Draft 1",
      description: "Initial research and outline with preliminary thesis",
      date: "November 5, 2024",
      feedback: "Strong topic selection and good initial research. The thesis statement needs to be more specific and focused. Consider narrowing your scope to a particular aspect of digital privacy. Source integration could be improved with more direct quotes and analysis.",
      improvements: "Refined thesis statement to focus specifically on data collection practices of major social media platforms. Added more primary sources including recent case studies and user surveys. Improved source integration with better quote analysis and synthesis.",
      challenges: "Balancing breadth of research with depth of analysis, finding recent and relevant sources on rapidly evolving topic",
      learning: "Importance of having a clear, focused thesis early in the writing process"
    },
    {
      name: "Draft 2", 
      description: "Revised with peer feedback and instructor comments",
      date: "November 15, 2024",
      feedback: "Much improved structure and argument development. The evidence is stronger, but you need to address counterarguments more thoroughly. Consider the benefits of social media data collection and why users might accept these practices. Your conclusion could be more compelling.",
      improvements: "Added a dedicated section addressing counterarguments about the benefits of targeted advertising and user convenience. Strengthened evidence with recent case studies including the Cambridge Analytica scandal and GDPR implementation. Enhanced conclusion with broader implications for digital citizenship.",
      challenges: "Finding balanced perspectives on controversial topic, incorporating counterarguments without weakening main argument",
      learning: "Value of peer feedback in identifying blind spots and strengthening arguments"
    },
    {
      name: "Final Draft",
      description: "Polished final version with comprehensive revisions",
      date: "November 25, 2024",
      feedback: "Excellent synthesis of sources and compelling argument. The paper demonstrates strong research skills and thoughtful analysis. Your use of recent case studies and balanced perspective makes this a sophisticated piece of academic writing.",
      improvements: "Final polish on transitions between sections, enhanced introduction with compelling hook, refined conclusion with call to action for digital literacy education. Improved formatting and citation consistency.",
      challenges: "Ensuring all revisions maintained argument coherence, final editing for clarity and flow",
      learning: "How iterative revision leads to significantly stronger final product"
    }
  ],
  reflection: "This assignment taught me the importance of iterative writing and incorporating feedback effectively. The multiple drafts helped me develop a stronger argument and better integrate sources. I learned that good writing is a process of continuous improvement, not a one-time effort. The feedback I received at each stage pushed me to think more critically about my argument and consider multiple perspectives. This process showed me how revision can transform a basic research paper into a sophisticated academic argument. I also learned the value of peer feedback in identifying areas I might have overlooked and strengthening my overall argument.",
  keyLearning: [
    "The importance of a focused, specific thesis statement",
    "How to effectively integrate and analyze sources",
    "The value of addressing counterarguments",
    "How peer feedback can improve writing quality",
    "The iterative nature of strong academic writing"
  ],
  artifacts: [
    {
      name: "Research Outline",
      description: "Initial planning document with research questions and source list",
      type: "Planning Document"
    },
    {
      name: "Annotated Bibliography",
      description: "Comprehensive source analysis with 15+ academic sources",
      type: "Research Document"
    },
    {
      name: "Peer Review Comments",
      description: "Feedback from classmates on Draft 2",
      type: "Feedback Document"
    },
    {
      name: "Final Research Paper",
      description: "Complete 2,500-word research paper with proper citations",
      type: "Final Document"
    }
  ]
}

export default function MajorAssignment1() {
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
                <Database className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Sources</p>
                <p className="text-white font-medium">{assignmentData.sources}</p>
              </CardContent>
            </Card>
            <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-4 text-center">
                <Target className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                <p className="text-sm text-gray-400">Drafts</p>
                <p className="text-white font-medium">3 Versions</p>
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
              <TabsTrigger value="drafts" className="data-[state=active]:bg-cyan-600">Drafts & Process</TabsTrigger>
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
                    <h4 className="text-lg font-semibold text-white mb-3">Research Focus</h4>
                    <p className="text-gray-300 leading-relaxed">
                      This research paper examined the complex relationship between social media platforms and user privacy. 
                      The paper analyzed how major platforms collect, use, and potentially misuse personal data, while also 
                      considering the benefits users receive from these practices. The research included recent case studies, 
                      user surveys, and regulatory developments to provide a comprehensive analysis of digital privacy concerns.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Key Research Questions</h4>
                    <ul className="text-gray-300 space-y-2">
                      <li>• How do social media platforms collect and utilize user data?</li>
                      <li>• What are the privacy implications of current data collection practices?</li>
                      <li>• How do users benefit from and respond to these practices?</li>
                      <li>• What regulatory and technological solutions exist for privacy protection?</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Methodology</h4>
                    <p className="text-gray-300 leading-relaxed">
                      The research involved comprehensive literature review of academic sources, analysis of recent case studies 
                      including the Cambridge Analytica scandal, examination of user privacy policies, and review of regulatory 
                      frameworks like GDPR. The paper synthesized findings from 15+ academic and industry sources to develop 
                      a balanced perspective on digital privacy issues.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="drafts" className="space-y-8">
              <div className="space-y-6">
                {assignmentData.drafts.map((draft, index) => (
                  <Card key={index} className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white">{draft.name}</CardTitle>
                        <Badge variant="outline" className="border-gray-600 text-gray-300">
                          {draft.date}
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-300">
                        {draft.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h5 className="text-sm font-medium text-cyan-400 mb-2 flex items-center">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Feedback Received
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{draft.feedback}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-green-400 mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Improvements Made
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{draft.improvements}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-purple-400 mb-2 flex items-center">
                          <Target className="h-4 w-4 mr-2" />
                          Challenges Faced
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{draft.challenges}</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium text-yellow-400 mb-2 flex items-center">
                          <Lightbulb className="h-4 w-4 mr-2" />
                          Key Learning
                        </h5>
                        <p className="text-gray-300 text-sm leading-relaxed">{draft.learning}</p>
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
          <p className="text-gray-400 mb-4">Major Assignment 1 - Research Paper</p>
          <p className="text-sm text-gray-500">Created as part of Professor Mainer's English Composition II course</p>
        </div>
      </footer>
    </div>
  )
} 