class Movie {
  title: string;
  id: number;
  constructor(title: string, id: number) {
    this.title = title;
    this.id = id;
  }
}

class MovieService {
  getMovies(genre: string): Promise<Movie[]> {
    return fetch(`https://www.movies.com/${genre}`)
        .then(res => res.json())
  }
}
