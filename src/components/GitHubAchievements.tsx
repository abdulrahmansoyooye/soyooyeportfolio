import React from "react";
import { Github, Star, Trophy, Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const GitHubAchievements = () => {
  return (
    <section className="section-padding bg-gradient-radial from-accent-purple/10 via-background to-background">
      <div className="section-wrapper">
        <div className="text-center mb-12 animate-on-scroll">
          <span className="px-3 py-1 rounded-full text-sm font-medium glass mb-4 inline-block">
            <Github className="inline-block mr-2" size={16} />
            GitHub Stats
          </span>
          <h2 className="heading-lg text-gradient mb-6">
            My Open Source Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Committed to collaboration and continuous improvement through active
            contributions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-on-scroll">
          <Card className="glass border-none overflow-hidden">
            <CardHeader className="bg-accent-purple/10 border-b border-white/10">
              <CardTitle className="flex items-center gap-2">
                <Trophy className="text-accent-purple" size={20} />
                GitHub Achievements
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-accent-purple/20 text-accent-purple mt-0.5">
                    <Star size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      Quickdraw ⚡️ – A fast problem solver!
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Earned a badge for closing issues within 5 minutes of
                      opening—proving speed, efficiency, and a sharp eye for
                      solutions. When it comes to rapid development and bug
                      fixes, I don’t just keep up—I set the pace!{" "}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-accent-purple/20 text-accent-purple mt-0.5">
                    <Star size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      🚀 Pull Shark - Twice the impact, twice the precision!
                      Quality work tells
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Recognized for consistently delivering high-quality,
                      production-ready code through multiple well-executed pull
                      requests.When innovation meets execution, the results
                      speak for themselves! 🚀
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-accent-purple/20 text-accent-purple mt-0.5">
                    <Star size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      🔥 YOLO – Pair Extraordinaire, A Collaboartive Peer
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Fearless, fast, and calculated! Earned this for
                      confidently merging changes that push projects forward.
                      Clean, efficient, and built for scale—because great
                      software starts with great collaboration!
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="glass border-none overflow-hidden">
            <CardHeader className="bg-accent-blue/10 border-b border-white/10">
              <CardTitle className="flex items-center gap-2">
                <Check className="text-accent-blue" size={20} />
                Contribution Highlights
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Annual Contributions</h3>
                  <span className="text-xl font-bold text-gradient-purple">
                    400+
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-accent-purple to-accent-blue h-2.5 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-accent-blue/20 text-accent-blue mt-0.5">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Consistent Contributor</h3>
                    <p className="text-sm text-muted-foreground">
                      Maintained a steady stream of contributions throughout the
                      year
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-accent-blue/20 text-accent-blue mt-0.5">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Project Maintainer</h3>
                    <p className="text-sm text-muted-foreground">
                      Actively maintain several projects with growing peers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="p-1.5 rounded-full bg-accent-blue/20 text-accent-blue mt-0.5">
                    <Check size={16} />
                  </div>
                  <div>
                    <h3 className="font-medium">Communication Expert</h3>
                    <p className="text-sm text-muted-foreground">
                      Actively Collaborating with technical and non-technical
                      teams, while optimizing deployment strategies
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://github.com/abdulrahmansoyooye"
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary inline-flex items-center gap-2"
          >
            <Github size={18} />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubAchievements;
