import React, { useState } from 'react';
import { User } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

function Navigation() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const menuItems = ['Dashboard', 'Analysis', 'History'];

  return (
    <nav className="glass-card sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold gradient-text-neon">
            Dharma AI
          </h1>
          
          <ul className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => setActiveItem(item)}
                  className={`relative text-sm font-medium transition-all duration-200 ${
                    activeItem === item ? 'text-primary' : 'text-foreground/80 hover:text-foreground'
                  }`}
                >
                  {item}
                  {activeItem === item && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary neon-glow-blue" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 hover:bg-primary/20 transition-all duration-200 hover:neon-glow-blue">
          <User className="w-5 h-5 text-primary" />
        </button>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <User className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeItem === item
                      ? 'bg-primary/20 text-primary font-medium'
                      : 'text-foreground/80 hover:bg-muted'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}

export default Navigation;