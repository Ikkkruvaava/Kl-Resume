import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    
    // Dynamic params
    const username = searchParams.get('username')?.slice(0, 100) || 'You';
    
    // Note: In a real scenario, you can fetch user data from MongoDB here,
    // but fetching DB at Edge runtime requires HTTP based DB clients (like Prisma with accelerate or mongoose over HTTP fetch). 
    // Here we'll generate a vibrant dynamic card based on just the username for speed.

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#09090b',
            backgroundImage: 'radial-gradient(circle at 25px 25px, #8b5cf633 2%, transparent 0%), radial-gradient(circle at 75px 75px, #ec489933 2%, transparent 0%)',
            backgroundSize: '100px 100px',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Glassmorphism card container */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#18181b',
              border: '2px solid #27272a',
              borderRadius: '40px',
              padding: '60px',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Avatar Placeholder */}
            <div
              style={{
                width: '150px',
                height: '150px',
                borderRadius: '75px',
                background: 'linear-gradient(to bottom right, #a855f7, #ec4899)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '30px',
                padding: '4px',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '75px',
                  backgroundColor: '#000',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 60,
                fontWeight: 900,
                color: 'white',
                letterSpacing: '-0.05em',
                marginBottom: '10px',
              }}
            >
              {username}'s Portfolio
            </div>

            <div
              style={{
                display: 'flex',
                fontSize: 30,
                fontWeight: 600,
                color: '#a1a1aa', // text-zinc-400
                marginBottom: '30px',
              }}
            >
              KL Resume | Developer & Creator
            </div>

            <div
              style={{
                display: 'flex',
                gap: '15px',
              }}
            >
              {['Next.js', 'React', 'Design'].map((skill) => (
                <div
                  key={skill}
                  style={{
                    display: 'flex',
                    padding: '10px 24px',
                    backgroundColor: '#27272a',
                    borderRadius: '20px',
                    color: 'white',
                    fontSize: 20,
                    fontWeight: 500,
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: 40,
              fontSize: 24,
              color: '#71717a',
              fontWeight: 700,
              letterSpacing: '0.1em',
            }}
          >
            KLRESUME.IN
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
