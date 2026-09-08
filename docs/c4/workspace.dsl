/*
 * Gerado por fernando-moretes/platform como ponto de partida. ESTE arquivo e
 * seu: o rollout so cria se nao existir, nunca sobrescreve.
 *
 * Modelo C4 de ref-finops-architect-toolkit. Renderize em https://c4.home.lab (Structurizr Lite)
 * ou cole em https://structurizr.com/dsl.
 */
workspace "ref-finops-architect-toolkit" "AWS FinOps toolkit: RI vs On-Demand, S3 storage class optimizer, Lambda cost estimator, tagging strategy." {

    configuration {
        scope softwaresystem
    }

    model {
        usuario = person "Usuário"
        sistema = softwareSystem "ref-finops-architect-toolkit" "AWS FinOps toolkit: RI vs On-Demand, S3 storage class optimizer, Lambda cost estimator, tagging strategy." {
            app = container "Aplicação" "Descreva o que roda aqui" "ci-node.yml"
        }
        usuario -> sistema.app "Usa" "HTTPS"
    }

    views {
        systemContext sistema "contexto" {
            include *
            autoLayout lr
        }
        container sistema "containers" {
            include *
            autoLayout lr
        }
        styles {
            element "Person" {
                shape person
                background #08427b
                color #ffffff
            }
            element "Software System" {
                background #1168bd
                color #ffffff
            }
            element "Container" {
                background #438dd5
                color #ffffff
            }
        }
    }
}
