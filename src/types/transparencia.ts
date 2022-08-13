import { DadosGerais } from './dadosGerais';
import { UsuariosPorCurso } from './usuariosPorCurso';
import { UsuariosPorEstado } from './usuariosPorEstado';

export type Transparencia = {
  dados_gerais: DadosGerais,
  usuarios_por_curso: UsuariosPorCurso[],
  usuarios_por_estado: UsuariosPorEstado[]
}