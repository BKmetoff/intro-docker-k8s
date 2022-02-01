.PHONY: all apply delres

km = kubectl --context minikube

apply:
	@echo ""
	@echo "============="
	@echo "Changing directory to _manifests"
	@cd ./_manifests &&\
		echo "Applying all resources..." &&\
		for f in *; do $(km) apply -f $${f}; done
	@echo ""
	@echo "Done"
	@echo "============="

delres:
	@echo ""
	@echo "============="
	@echo "Changing directory to _manifests"
	@cd ./_manifests &&\
		echo "Deleting all resources..." &&\
		for f in *; do $(km) delete -f $${f}; done
	@echo ""
	@echo "Done"
	@echo "============="
