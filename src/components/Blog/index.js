import './index.scss'
import Table from 'rc-table'

const data = [
  {
    date: 'Jan 2023',
    title: 'a year in metaphor',
    description: "hey there demons, it's me ya girl",
    link: 'https://igloramus.substack.com/p/2022-metaphor',
    image: 'people2.png',
  },
  {
    date: 'Feb 2021',
    title: 'iap 2021 project dump',
    description:
      'pokerbots, paper submission, pickup-line tournament, puzzlehunt, painting',
    link: 'https://igloramus.substack.com/p/iap21',
    image: 'bw.gif',
  },
  {
    date: 'Feb 2021',
    title: 'big dijkstra energy',
    description: 'bad puns and good times',
    link: 'https://igloramus.substack.com/p/bde',
    image: 'BDE.PNG',
  },
  {
    date: 'Feb 2021',
    title: "valentine's day",
    description: 'bin packing is NP-complete, but what about unpacking?',
    link: 'https://igloramus.substack.com/p/valentines-day',
    image: 'vday.jpg',
  },
  {
    date: 'Dec 2020',
    title: 'speedrunning college',
    description: 'advice on finishing undergrad early',
    link: 'https://igloramus.substack.com/p/speedrunning-college',
    image: 'schedule2.PNG',
  },
  {
    date: 'Mar 2020',
    title: 'bezos, bodies, and backprop',
    description: 'exhibition review of BODY TEXT for The Tech',
    link: 'https://igloramus.substack.com/p/bezos-bodies-and-backprop',
    image: 'body_text.jpg',
  },
]

const columns = [
  {
    render: (_, r) => (
      <div className="blog-title">
        <b>
          <a href={r.link}>{r.title}</a>
        </b>
        <br></br>
        {r.description}
        <br></br>
        <br></br>
        {r.date}
      </div>
    ),
    width: 750,
  },
  {
    render: (_, r) => (
      <div>
        <img
          className="thumbnail"
          src={require('../../assets/images/blogs/' + r.image)}
        />
      </div>
    ),
    width: 250,
  },
]

const Blog = () => {
  return (
    <div>
      <div style={{ textAlign: 'left' }}>
        <p>
          <span class="title">Blog | </span>Thoughts manifested occasionally.
          Migrated to <a href="https://igloramus.substack.com">substack</a>.
        </p>
        <Table showHeader={false} columns={columns} data={data} />
      </div>
    </div>
  )
}

export default Blog
