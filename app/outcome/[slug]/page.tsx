"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, PenLine, FileSearch, Lightbulb, FileText, Palette, FileType, Zap } from "lucide-react"

const learningOutcomes = {
  "generating-inquiry": {
    id: 1,
    title: "Generating Inquiry",
    description:
      "Students will be able to generate and explore genuine lines of inquiry related to writing, language, literacy, and/or rhetoric.",
    icon: <Lightbulb className="h-8 w-8" />,
    detailedDescription:
      "This outcome is about learning how to ask thought provoking questions and explore topics that matter to me. It helped me figure out what I'm interested in when it comes to writing, language, and communication, and how to dig deeper by doing research and thinking critically.",
    skills: [
      "Formulating research questions that drive meaningful inquiry",
      "Identifying gaps in existing knowledge or discourse",
      "Exploring connections between different areas of writing and rhetoric",
      "Developing curiosity about language and communication",
      "Pursuing lines of inquiry that lead to deeper understanding",
    ],
    assignments: [
      {
        title: "NWWK Quiz",
        artifactUrl: "/artifacts/nwwk-quiz.pdf",
        reflection: "Before I took the NWWK quiz, I believed that writing was a fixed skill. What I mean is that one could either be good at it or not. However, after taking the quiz and reading the associated PDFs, I have arrived at a different conclusion. For example, I wrote there that “writing isn’t just a tool for communication, but also something that’s worth studying”. Realizing this helped me see that writing just to meet requirements isn’t all that writing has to offer. After this realization, I wondered about the consequences of seeing writing only as a basic skill, and why writing hasn’t traditionally been treated as a real field of study. This aligns with the generating inquiry outcome, which has a focus on exploring complex questions related to literacy and rhetoric."
      },
      {
        title: "Beyond-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
    ],
  },
  "multiple-ways-writing": {
    id: 2,
    title: "Multiple ways of writing",
    description:
      "Students will be able to purposefully integrate multimodality, multiple languages, and/or multiliteracies into writing products to support their goals.",
    icon: <Palette className="h-8 w-8" />,
    detailedDescription:
      "This outcome taught me how writing isn't just about words on a page. I learned how to mix in things like images, sounds, and even different languages to get my message across better and connect with different kinds of people.",
    skills: [
      "Combining textual and visual elements effectively",
      "Integrating multiple languages or dialects when appropriate",
      "Adapting writing style for different media platforms",
      "Understanding how different modes of communication affect meaning",
      "Selecting appropriate communication strategies for specific goals",
    ],
    assignments: [
      {
        title: "NWWK Quiz",
        artifactUrl: "/artifacts/nwwk-quiz.pdf",
        reflection:
          "I believe my quiz answers have demonstrated the importance of utilizing multiple ways of writing. My answers acknowledged the fact that writing takes a bunch of different forms and that genres (such as blogs, menus, etc) are shaped by their rhetorical situations. I realized that each genre operates under its own conventions, expectations, and audience needs. This realization has helped me become more intentional in how I communicate overall, even outside of the classroom.",
      },
      {
        title: "Beyond-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
    ],
  },
  "information-literacy": {
    id: 3,
    title: "Information Literacy",
    description:
      "Students will be able to evaluate and act on criteria for relevance, credibility, and ethics when gathering, analyzing, and presenting primary and secondary source materials.",
    icon: <FileSearch className="h-8 w-8" />,
    detailedDescription:
      "This outcome helped me get better at finding and using reliable sources. I learned how to tell if information is trustworthy, why it matters to use it ethically, and how to present it clearly in my own work.",
    skills: [
      "Evaluating source credibility and authority",
      "Assessing relevance of sources to research questions",
      "Understanding ethical considerations in research",
      "Distinguishing between different types of sources",
      "Presenting information accurately and responsibly",
    ],
    assignments: [
      {
        title: "CRAAP Test",
        artifactUrl: "/artifacts/CRAAP_Test.docx",
        reflection:
          "The CRAAP Test assignment was a key part of how I practiced information literacy in this course. I evaluated four scholarly sources using criteria such as credibility, accuracy, relevance, and purpose. Instead of just picking sources that looked academic, I had to carefully justify why each one was reliable and appropriate for my research topic on course modality and rhetorical awareness. For example, I explained why an older article was still useful because of its foundational analysis of hybrid learning, and I pointed out strengths in newer studies like their use of up-to-date statistics or diverse data sources. This process helped me become more thoughtful about what makes a source trustworthy and useful in an academic setting, and I now have a clearer method for evaluating secondary research in future writing projects.",
      },
      {
        title: "Beyond-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
    ],
  },
  "research-genre-production": {
    id: 4,
    title: "Research Genre Production",
    description:
      "Students will be able to produce writing that demonstrates their ability to navigate choices and constraints in a variety of public and/or academic research genres that matter to specific communities.",
    icon: <FileType className="h-8 w-8" />,
    detailedDescription:
      "This outcome helped me understand how different types of research writing work. I learned how to adjust my writing depending on the audience, whether it's for a school paper or something more public, and how to follow the rules for each type.",
    skills: [
      "Identifying conventions of different research genres",
      "Adapting writing style to meet genre expectations",
      "Understanding audience needs in different research contexts",
      "Making strategic choices within genre constraints",
      "Recognizing how genres function in specific communities",
    ],
    assignments: [
      {
        title: "CRAAP Test",
        artifactUrl: "/artifacts/CRAAP_Test.docx",
        reflection:
          "The CRAAP Test also helped me better understand the genre expectations of research-based assignments. Instead of just summarizing sources like in a traditional annotated bibliography, this task required me to write in a more evaluative and reflective way. I had to balance objective description with my own reasoning, which is something that matters in academic genres focused on research methods. I followed a structured format but also had to use my own voice to explain how and why these sources would support my larger project. In doing so, I learned how writing in research genres isn’t just about gathering information—it’s about making strategic choices about what to include, how to present it, and how it fits into the broader conversation. That’s exactly what this outcome is about: navigating the constraints and expectations of academic writing with intention.",
      },
      {
        title: "Beyond-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
    ],
  },
  "contributing-knowledge": {
    id: 5,
    title: "Contributing Knowledge",
    description:
      "Students will be able to draw conclusions based on analysis and interpretation of primary evidence and place that work in conversation with other source materials.",
    icon: <Zap className="h-8 w-8" />,
    detailedDescription:
      "Placeholder.",
    skills: [
      "Analyzing primary evidence systematically",
      "Drawing well-supported conclusions from evidence",
      "Connecting original analysis to existing scholarship",
      "Participating in scholarly conversations",
      "Articulating the significance of research findings",
    ],
    assignments: [
      {
        title: "In-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
      {
        title: "Beyond-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
    ],
  },
  revision: {
    id: 6,
    title: "Revision",
    description:
      "Students will be able to negotiate differences in and act with intention on feedback from readers when drafting, revising, and editing their writing.",
    icon: <PenLine className="h-8 w-8" />,
    detailedDescription:
      "Placeholder.",
    skills: [
      "Receiving feedback constructively",
      "Evaluating different types of reader responses",
      "Making strategic decisions about revision priorities",
      "Implementing substantive changes to improve clarity and effectiveness",
      "Developing a personal revision process",
    ],
    assignments: [
      {
        title: "In-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
      {
        title: "Beyond-Class Artifact",
        artifactUrl: "/artifacts/placeholder.txt",
        reflection: "Placeholder."
      },
    ],
  },
}

export default function OutcomePage() {
  const params = useParams()
  const slug = params.slug as string
  const outcome = learningOutcomes[slug as keyof typeof learningOutcomes]

  if (!outcome) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Outcome Not Found</h1>
          <Link href="/">
            <Button className="bg-cyan-600 hover:bg-cyan-700">Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2">
              <BookOpen className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold text-white">ENC 1102 ePortfolio</span>
            </Link>
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
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl">
              <div className="text-cyan-400">{outcome.icon}</div>
            </div>
          </div>
          <Badge className="mb-4 bg-gray-800 text-cyan-300 border-gray-700">Learning Outcome {outcome.id}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{outcome.title}</h1>
          <p className="text-xl text-gray-300 leading-relaxed">{outcome.description}</p>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <Card className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 leading-relaxed text-lg">{outcome.detailedDescription}</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Assignments and Reflections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Artifacts</h2>
          <div className="space-y-8">
            {outcome.assignments.map((assignment, index) => (
              <Card key={index} className="border border-gray-700 bg-gray-800/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start space-x-3">
                    <FileText className="h-6 w-6 text-cyan-400 mt-1" />
                    <div>
                      <CardTitle className="text-xl text-white">{assignment.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-cyan-500">
                    <h4 className="text-cyan-400 font-semibold mb-2">
                      <a
                        href={assignment.artifactUrl}
                        download
                        className="underline hover:text-cyan-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Link to Artifact
                      </a>
                    </h4>
                    {assignment.reflection
                      .split("\n\n")
                      .map((para, i) => (
                        <p key={i} className="text-gray-300 italic mt-2">
                          {para}
                        </p>
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to Other Outcomes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-8">Explore Other Learning Outcomes</h2>
          <Link href="/#outcomes">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white"
            >
              View All Outcomes
            </Button>
          </Link>
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
