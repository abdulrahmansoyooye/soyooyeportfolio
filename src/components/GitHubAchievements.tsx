import React from "react";
import { Github, Star, Trophy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const GitHubAchievements = () => {
  return (
    <section className="section-padding bg-gradient-radial from-accent-purple/10 via-background to-background">
    <div className="section-wrapper">
      <div className="text-center mb-12">
        <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
          <Github className="inline-block mr-2" size={16} />
          GitHub Highlights
        </span>
        <h2 className="heading-lg text-gradient mb-4">
          Open Source Impact
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Building in public and solving real problems through code.
        </p>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Achievements */}
        <Card className="glass border-none overflow-hidden">
          <CardHeader className="bg-accent-purple/10 border-b border-white/10">
            <CardTitle className="flex items-center gap-2">
              <Trophy className="text-accent-purple" size={20} />
            Github  Achievements
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            {[
              {
                title: "⚡️ Quickdraw",
                desc: "Closed issues in minutes. I move fast and fix faster.",
              },
              {
                title: "🚀 Pull Shark",
                desc: "Clean, tested, and impactful pull requests every time.",
              },
              {
                title: "🔥 YOLO",
                desc: "Collaborative, fearless merges that keep projects alive.",
              },
            ].map((item, i) => (
              <div className="flex gap-3" key={i}>
                <div className="p-2 rounded-full bg-accent-purple/20 text-accent-purple">
                  <Star size={16} />
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
  
        {/* Contribution Stats */}
        <Card className="glass border-none overflow-hidden">
          <CardHeader className="bg-accent-blue/10 border-b border-white/10">
            <CardTitle className="flex items-center gap-2">
              <Check className="text-accent-blue" size={20} />
              Contributions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Annual Contributions</p>
              <h3 className="text-3xl font-bold text-gradient-purple">400+</h3>
            </div>
            {[
              "Consistent open-source contributor",
              "Maintainer of active projects",
              "Strong cross-team communication",
            ].map((text, i) => (
              <div className="flex gap-3" key={i}>
                <div className="p-2 rounded-full bg-accent-blue/20 text-accent-blue">
                  <Check size={16} />
                </div>
                <p className="text-sm text-muted-foreground">{text}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
  
      <div className="flex justify-center mt-10">
        <a
          href="https://github.com/abdulrahmansoyooye"
          target="_blank"
          rel="noopener noreferrer"
          className="button-secondary inline-flex items-center gap-2"
        >
          <Github size={18} />
          GitHub Profile
        </a>
      </div>
    </div>
  </section>
  
  );
};

export default GitHubAchievements;
