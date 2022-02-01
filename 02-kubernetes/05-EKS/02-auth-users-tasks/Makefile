.PHONY: all apply delres apply-demo

km = kubectl --context minikube
kdemo = kubectl --context arn:aws:eks:eu-west-1:936892409162:cluster/user-auth-demo

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

apply-demo:
	@echo ""
	@echo "============="
	@echo "Changing directory to _manifests"
	@cd ./_manifests &&\
		echo "Applying all resources to EKS demo cluster..." &&\
		for f in *; do $(kdemo) apply -f $${f}; done
	@echo ""
	@echo "Done"
	@echo "============="