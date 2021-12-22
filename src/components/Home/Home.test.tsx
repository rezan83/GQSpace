import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NewsList from './NewsList';


describe('Component: NewsList', () => {
  it('displays returned items on successful fetch', async () => {
    let news =  [
            {
              "id": 13335,
              "title": "Satellite",
              "url": "https://spacenews.com/satellite-vu-orders-first-satellite-from-sstl/",
              "imageUrl": "https://spacenews.com/wp-content/uploads/2021/12/darkcarb.jpg",
              "newsSite": "SpaceNews",
              "summary": "Surrey Satellite Technology Ltd. (SSTL) won a contract from British Earth observation startup Satellite Vu to build the first satellite in a constellation designed to provide thermal infrared imaging for climate change applications.",
              "publishedAt": "2021-12-17T05:26:43.000Z",
              "updatedAt": "2021-12-17T05:26:43.481Z",
              "featured": false,
              "launches": [],
              "events": []
            },
            {
              "id": 13333,
              "title": "Intelsat",
              "url": "https://spacenews.com/intelsat-gets-bankruptcy-court-approval-to-exit-chapter-11-in-early-2022/",
              "imageUrl": "https://spacenews.com/wp-content/uploads/2021/03/Intelsat_Tysons_Building_003-879x485-1.jpeg",
              "newsSite": "SpaceNews",
              "summary": "Intelsat is poised to exit Chapter 11 in early 2022, after its bankruptcy court approved a restructuring plan that cuts the satellite operator’s debt from about $16 billion to $7 billion.",
              "publishedAt": "2021-12-16T23:56:43.000Z",
              "updatedAt": "2021-12-16T23:56:43.132Z",
              "featured": false,
              "launches": [],
              "events": []
            },
      ]
    

    render(<NewsList news={news}  />,{wrapper: MemoryRouter});


    const displayedNews = await screen.findAllByTestId(/news-item/);
    expect(displayedNews).toHaveLength(2);
    expect(screen.getByText('Satellite')).toBeInTheDocument();
    expect(screen.getByText('Intelsat')).toBeInTheDocument();
  });
});