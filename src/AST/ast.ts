interface Stmt {

}

interface Decl extends Stmt {
  name: string
}

interface Expr extends Stmt {
  value: any
}

// ------------------------------------

class Value implements Expr {
  type: string
  value: any

  constructor(type: string, value: any) {
    this.value = value
    this.type = type
  }
}


class FunctionArg {
  type: string

  constructor(type: string) {
    this.type = type
  }
}

class FunctionDecl implements Decl {
  name: string 
  returnType: string
  parameters: FunctionArg[]
  body: Stmt[]

  constructor(name: string, returnType: string, parameters: FunctionArg[], body: Stmt[]){
    this.name = name
    this.returnType = returnType
    this.parameters = parameters
    this.body = body
  }
}

class VariableDecl implements Decl {
  name: string
  value: Value

  constructor (name: string, value: Value) {
    this.name = name
    this.value = value
  }
}


/**
 * algo(array: number[]) {
 *  int i = 0;
 *  int j = 0;
 *  
 * 
 * 
 * }
 * 
 * 
*/

class Exec {
  main() {
    var funcBody: Stmt[] = []

    var decl_i = new VariableDecl("i", new Value("integer", 0))
    funcBody.push(decl_i)

    var decl_j = new VariableDecl("j", new Value("integer", 0))
    funcBody.push(decl_j)

    var funcArgs = [new FunctionArg("String")]

    var f = new FunctionDecl("bla", "String", funcArgs, funcBody)
  }
}