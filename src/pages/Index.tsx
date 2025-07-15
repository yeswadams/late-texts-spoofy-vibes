
import { useState } from "react";
import { Play, Heart, MoreHorizontal, Shuffle, SkipBack, SkipForward, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentTrack, setCurrentTrack] = useState("");

  const tracks = [
    { id: 1, title: "First Date, First Delay (Acoustic)", duration: "3:24", plays: "1,234,567" },
    { id: 2, title: "Traffic Was Worth It (Ft. Your Smile)", duration: "4:12", plays: "987,654" },
    { id: 3, title: "She Asked, I Spoofed (Interlude)", duration: "2:45", plays: "756,432" },
    { id: 4, title: "You Got Me Typing Too Much", duration: "3:56", plays: "543,210" },
    { id: 5, title: "Softer When You Laugh", duration: "4:33", plays: "432,109" },
  ];

  const handlePlay = (trackTitle: string) => {
    setCurrentTrack(trackTitle);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <h1 className="text-2xl font-bold text-green-400">Spoofy by Adams</h1>
        <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
          Follow
        </Button>
      </header>

      {/* Artist Profile Section */}
      <div className="px-4 md:px-6 pb-8">
        <div className="flex flex-col md:flex-row items-start gap-6 mb-8">
          {/* Album Cover */}
          <div className="w-60 h-60 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg shadow-2xl flex items-center justify-center flex-shrink-0">
            <div className="text-center">
              <div className="text-6xl mb-2">🎵</div>
              <div className="text-sm font-semibold">ADAMS &</div>
              <div className="text-xs">THE LATE TEXTS</div>
            </div>
          </div>

          {/* Artist Info */}
          <div className="flex-1">
            <p className="text-sm text-gray-300 mb-2">Artist</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Adams & The Late Texts</h1>
            <p className="text-gray-300 mb-6">2.1M monthly listeners</p>
            
            {/* Play Controls */}
            <div className="flex items-center gap-4 mb-6">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-400 text-black rounded-full w-14 h-14"
                onClick={() => handlePlay("Random Track")}
              >
                <Play className="w-6 h-6 ml-1" fill="currentColor" />
              </Button>
              <Button variant="ghost" size="lg">
                <Heart className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="lg">
                <MoreHorizontal className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mb-8 p-6 bg-black/30 rounded-lg backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-3">About the Artist</h3>
          <p className="text-gray-300 leading-relaxed">
            Adams doesn't drop bars—but he drops energy. Inspired by delayed dates, great convos, 
            and the occasional smooth lie. When he's not crafting the perfect text response, 
            he's turning life's awkward moments into unexpectedly sweet melodies.
          </p>
        </div>

        {/* Popular Tracks */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Popular</h2>
          <div className="space-y-2">
            {tracks.map((track, index) => (
              <div 
                key={track.id} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <span className="text-gray-400 w-4 text-right">{index + 1}</span>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-10 h-10 rounded-full bg-transparent hover:bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handlePlay(track.title)}
                >
                  <Play className="w-4 h-4" fill="currentColor" />
                </Button>

                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{track.title}</p>
                  <p className="text-sm text-gray-400">Adams & The Late Texts</p>
                </div>

                <div className="hidden md:block text-sm text-gray-400">
                  {track.plays}
                </div>

                <div className="text-sm text-gray-400">
                  {track.duration}
                </div>

                <Button variant="ghost" size="sm">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Player Controls (Bottom) */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-gray-800 p-4">
          <div className="flex items-center justify-between max-w-screen-xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded flex items-center justify-center text-xs">
                🎵
              </div>
              <div>
                <p className="text-sm font-medium">Ready to play...</p>
                <p className="text-xs text-gray-400">Adams & The Late Texts</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Shuffle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <SkipBack className="w-5 h-5" />
              </Button>
              <Button 
                size="sm" 
                className="bg-white text-black hover:bg-gray-200 rounded-full w-8 h-8"
                onClick={() => handlePlay("Player Control")}
              >
                <Play className="w-4 h-4" fill="currentColor" />
              </Button>
              <Button variant="ghost" size="sm">
                <SkipForward className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Repeat className="w-4 h-4" />
              </Button>
            </div>

            <div className="hidden md:block text-sm text-gray-400">
              0:00 / 0:00
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">🎵 Plot Twist! 🎵</DialogTitle>
            <DialogDescription className="text-center text-gray-300 text-base leading-relaxed pt-4">
              Okay, okay… I was just kidding. But if I was an artist, this track would've been about you. 😉
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-4">
            <Button 
              onClick={() => setShowModal(false)}
              className="bg-green-500 hover:bg-green-400 text-black"
            >
              That's actually sweet 💚
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
