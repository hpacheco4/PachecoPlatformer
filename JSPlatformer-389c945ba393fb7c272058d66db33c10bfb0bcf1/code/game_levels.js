var GAME_LEVELS = [
  ["                                                                                ",
   "             s                  s                    s                          ",
   "                             yy              mm                                 ",
   "     s     yyyyy       s     yy             mm                              s   ",
   "         yyyyyyyyy          yyyy             mm                    o            ",
   "                yyyy         yy         s            yyyyy                      ",
   "            s                                       yyyyyyyy                    ",
   "                                                               xxx!!!xxx        ",
   "                     o  o           o o      xx        xxx       x!!!x          ",
   "            o                          t                         xx!xx          ",
   "                     xxxx          xxxxx        xx                xvx        t  ",
   "    @       o                                                               xx  ",
   "  xxxxxxxxx                              yyyy                  o             x  ",
   "                                o          yyyyy        o                    x  ",
   "                   o          xxxx        yyyyyyy      xxxx                o x  ",
   "             xxxx                                                  t         x  ",
   " t               o      t                   t                    xxxxx       x  ",
   " x               xxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   " x!!!!!!!!!!!!!!!x            x   x                  x     x                    ",
   " x!!!!!!!!!!!!!!!x            x!!!x                  x!!!!!x                    ",
   " xxxxxxxxxxxxxxxxx            x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  [" v                                                    x                                                           ",
   " v                                                o   xg                                                          ",
   " v                                              x     xx                                                          ",
   " v                                             x      x                                                           ",
   " v                                           tx   o   x    xx                                                     ",
   " v                                          ox        x                                                           ",
   " v                                          x         xx                                                          ",
   " v                                         x          x                                                           ",
   " v                                        x           x                                                           ",
   " v                                       x            x    xx          o                                          ",
   " v                                      x         o   x              xxxx                                         ",
   " v                                    ox              xx            x    x                                        ",
   " v                                   tx               x            x      x                                       ",
   " v                                   x                x    xx     x        x                                   x!!",
   " v                                  x                 x          x                                             x!!",
   " v                                 x                  xo         x                                             x!!",
   " v               t                x                   xx        xx                                             x!!",
   " v             xxxxxxx           x                          xxxxxx                                             x!!",
   " v            xx     xx         x                                                                              xxx",
   " v           xx       xx       x                          o                                                       ",
   " v   @       x         x       x          o             xxxxxxxxx        x                                        ",
   " v  xxx      x         x       x                                          x                                       ",
   " v  x x      x         x       xx o xx    x    x     x                     x     t           o         o          ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!            xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!                                                  ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!x   xxx               xx!!!!!!xx  !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
  ["                                                                                                              ",
   "                       v                                                       yyy                            ",
   "             s                               yy                              yyyyyyyy                         ",
   "     @                             s         yy                                   yyyy       s                ",
   "   xxxxx                                     yy                        o                                      ",
   "   x   x                                    yyyy                      xxxx                  xxx               ",
   "   x   x  o             s                    yy                  x              xxxx                          ",
   "   x   x                                                                                                g     ",
   "!!!x   x                                                  xxxx                        xxx              xxxxxxx",
   "!!!x   x  o                                                                o                                  ",
   "!!!x   x         t          xxxxxxxxxxxxxx         o   x         xxx      xxxx                                ",
   "!!!x   xxxxxxxxxxxxxx       x                    xxxx                                                         ",
   "!!!x                xx      x                                                                                 ",
   "xx!x           o    x       x                                                  xxxx                           ",
   "  v            o    x      xx                                                                                 ",
   "        xxxxxxxxxxxxx       x                          s                                                      ",
   "                            x                                                                                 ",
   "          =                 x        s                                                                        ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                      yyyyyyy                                                ",
   "      s                                                   yyyyyy                                              ",
   "                                                       yyyyyyyy                                               ",
   "                                                     yyyyyy                                                o  ",
   "                 s                                    yyyyyyy                                              o  ",
   "                                                        yyyyyyy                 t      t      t            o  ",
   "                                                           yyyyyyy          xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                              yyyyyyy                                         ",
   "                                                             yyyyyy                                           ",
   "                                                              yyyyyyyyy                                       ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                 ",
   "                                                                                 ",
   "                                                                                 ",
   "                             @                                                   ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                        m                        ",
   "       m      m                              m          m                        ",
   "        m    m                                          m                        ",
   "         m  m    mmm   m  m         m  m  m  m  m mm    m                        ",
   "          mm    m   m  m  m         m  m  m  m  mm  m   m                        ",
   "           m    m   m  m  m         m  m  m  m  m   m                            ",
   "           m     mmm    mm           mm mm   m  m   m   o                        ",
   "                                                                                 ",
   "                                                                                 ",
   "                                                        x                        ",
   "                                                        x                        ",
   "                                                        x                        ",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
