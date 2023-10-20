/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/


interface ComponentProp {
  title: string;
}

class Component<T extends ComponentProp> {
  constructor(public props: T) {}
}

class Page extends Component<ComponentProp> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};