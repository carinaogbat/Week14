import { render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'


const allCats = [
    {
        "name": "Orion",
        "bio": "Orion came to us when she weighed only a few ounces. She was accidentally left in the back of a pick up truck by her mother. We spent a full month bottle feeding her and she has grown into a big, fluffy, and beautiful cat. Unfortunately Orion is very very spicy. So spicy in fact, that a lot of the times we have to avoid her when we're in the house. The spicyness hits randomly, so we never know what we're going to get. A neighbor even nicknamed her 'Mr. Steal-Your-Face' because she will literally try and take your face off. Whoops.",
        "indoor": "Indoor/outdoor",
        "id": 1

    },
    {
        "name": "Rhea",
        "bio": "Rhea is a very rambunctious and naughty black kitty. She always keeps her human on her toes. Things Rhea has done over the past month include: getting stuck in the neighbor's yard, getting stuck on the neighbor's roof, getting stuck on her own roof, going into the washing machine, going into the dryer, knocking over the air filter, and generally causing havoc.",
        "indoor": "Indoor/outdoor",
        "id": 2

    },
    {
        "name": "Artemis",
        "bio": "Artemis is really just an old lady trapped in a kitten's body. She's a very hefty, slow, and shy girl and rarely gets into any sort of trouble.",
        "indoor": "Indoor/outdoor",
        "id": 3

    }
];

describe('Home', () => {
  // test a static heading
  it('renders a heading', () => {
    render(<Home allCats={allCats}/>)
 
    const heading = screen.getByRole('heading', {
      name: /Hello from Carinas Cats/i,
    })
 
    expect(heading).toBeInTheDocument()
  });

  it('has navigation', () => {
    render(<Home />)

    const nav = screen.getByRole('link', {
        name: /Check the CATalog/i,
    })

    expect(nav).toBeInTheDocument()
  });

  it('has bio info about cat (Orion)', () => {
    render(<Home allCats={allCats} />);

    const bio = screen.getByRole('link', {
      name: /Orion/i,
    });
  });

  it('has bio info about cat (Rhea)', () => {
    render(<Home allCats={allCats} />);

    const bio = screen.getByRole('link', {
      name: /Rhea/i,
    });
  });

  it('has bio info about cat (Artemis)', () => {
    render(<Home allCats={allCats} />);

    const bio = screen.getByRole('link', {
      name: /Artemis/i,
    });
  });
  
  it('has cat footer', () => {
    render(<Home allCats={allCats} />);

    const footer = screen.getByRole('footer', {
      name: /Carinas Cats, a site for cat lovers/i,
    });
  });
  
  
})

  