"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  BookOpen, 
  FileText, 
  Calendar,
  Target,
  Download,
  FileSearch
} from "lucide-react"
import Link from "next/link"

const assignmentData = {
  title: "Research Proposal",
  subtitle: "Major Assignment 1",
  description: "A comprehensive research proposal examining how course modality, online versus in-person, impacts students' development of rhetorical awareness in first-year writing.",
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
      link: "/artifacts/MA1.pdf",
      feedback: "Strong topic selection and good initial research. The thesis statement needs to be more specific and focused. Consider narrowing your scope to a particular aspect of digital privacy. Source integration could be improved with more direct quotes and analysis.",
      improvements: "Refined thesis statement to focus specifically on data collection practices of major social media platforms. Added more primary sources including recent case studies and user surveys. Improved source integration with better quote analysis and synthesis.",
      challenges: "Balancing breadth of research with depth of analysis, finding recent and relevant sources on rapidly evolving topic",
      learning: "Importance of having a clear, focused thesis early in the writing process"
    },
    {
      name: "Draft 2", 
      description: "Revised with peer feedback and instructor comments",
      date: "November 15, 2024",
      link: "/artifacts/MA1.pdf",
      feedback: "Much improved structure and argument development. The evidence is stronger, but you need to address counterarguments more thoroughly. Consider the benefits of social media data collection and why users might accept these practices. Your conclusion could be more compelling.",
      improvements: "Added a dedicated section addressing counterarguments about the benefits of targeted advertising and user convenience. Strengthened evidence with recent case studies including the Cambridge Analytica scandal and GDPR implementation. Enhanced conclusion with broader implications for digital citizenship.",
      challenges: "Finding balanced perspectives on controversial topic, incorporating counterarguments without weakening main argument",
      learning: "Value of peer feedback in identifying blind spots and strengthening arguments"
    },
    {
      name: "Final Draft",
      description: "Polished final version with comprehensive revisions",
      date: "November 25, 2024",
      link: "/artifacts/MA1.pdf",
      feedback: "Excellent synthesis of sources and compelling argument. The paper demonstrates strong research skills and thoughtful analysis. Your use of recent case studies and balanced perspective makes this a sophisticated piece of academic writing.",
      improvements: "Final polish on transitions between sections, enhanced introduction with compelling hook, refined conclusion with call to action for digital literacy education. Improved formatting and citation consistency.",
      challenges: "Ensuring all revisions maintained argument coherence, final editing for clarity and flow",
      learning: "How iterative revision leads to significantly stronger final product"
    }
  ],
  reflection: "This research proposal gave me the opportunity to explore a topic that felt both personally meaningful and academically important: how the modality of a writing course (online vs. in-person) influences students’ development of rhetorical awareness. Writing the proposal helped me think more critically about how different learning environments affect student engagement, especially in relation to audience, purpose, and context. It also taught me how to narrow a research question, design a feasible study under time constraints, and connect my personal observations to larger academic conversations. Planning out the timeline and designing survey questions showed me how complex even a small research study can be. This assignment helped me grow not just as a writer, but as a student researcher, and it gave me a much better appreciation for the behind-the-scenes planning that goes into academic inquiry.",
  keyLearning: [
    "The importance of a focused, specific thesis statement",
    "How to effectively integrate and analyze sources",
    "The value of addressing counterarguments",
    "How peer feedback can improve writing quality",
    "The iterative nature of strong academic writing"
  ]
}

export default function MajorAssignment1() {
  const [activeTab, setActiveTab] = useState("reflection")

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
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <Card className="border-gray-700 bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white">Reflection on the Writing Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                {/* <div className="flex items-center space-x-2 mb-3">
                  <Download className="h-5 w-5 text-cyan-400" />
                  <h4 className="text-lg font-semibold text-white">Assignment Document</h4>
                </div> */}
                <a 
                  href="/artifacts/MA1.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <FileText className="h-4 w-4" />
                  <span>View Assignment</span>
                </a>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                {assignmentData.reflection}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-semibold">ENC 1102 ePortfolio</span>
          </div>
          <p className="text-gray-400 mb-4">A digital showcase of academic growth and learning outcomes</p>
          <p className="text-sm text-gray-500">Created as part of Professor Mainer's English Composition II course</p>
        </div>
      </footer>
    </div>
  )
} 